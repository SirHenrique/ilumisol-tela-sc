import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as gedf from 'prisma_prismafunctions';
import { AnexoFile, VP_BPM } from 'src/beans/VP_BPM';
import { FileUpload } from 'primeng/fileupload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-t4-exemplos',
  templateUrl: './t4-exemplos.component.html',
  styleUrls: ['./t4-exemplos.component.css']
})
export class T4ExemplosComponent implements OnInit {
  @Input() vp!: VP_BPM;
  @ViewChild('anexosUploader1') anexosUploader1: FileUpload | undefined;

  public STEP = environment.tarefa();

  public readonlyHideComponent: boolean = false;

  constructor() {
    switch (this.STEP) {
      case environment.s1_etapa1:
        this.readonlyHideComponent = false;
        break;
    }
  }

  public ngOnInit(): void {
  }

  public sn = gedf.simplifyName;
  public fb = gedf.formatBytes;
  public ct = gedf.checkEnviadoTemplate;

  public checkEnviadoTemplate(nomeArq: string): boolean {
    const nomeArquivo = this.sn(nomeArq)
    for (const anexo of this.vp.anexo_files2) {
      if (anexo.file.name.includes(nomeArquivo)) {
        return true;
      }
    }
    return false;
  }



  /**
   * Métodos para manipular os anexos
   */
  public escolherDocumentoFileUpload(anexosUploader: FileUpload) {
    const selectedFiles = anexosUploader.files;

    // Crie um array de booleanos para armazenar os resultados da verificação
    const resultados: boolean[] = [];

    selectedFiles.forEach(selectedFile => {
      // Verifique se o arquivo selecionado já existe em anexo_files2
      const existe = this.vp.anexo_files2.some(anexo => anexo.file.name === selectedFile.name);

      // Adicione o resultado à matriz de resultados
      resultados.push(existe);
    });

    // Agora, resultados conterá true para arquivos que existem e false para os que não existem
    console.log(resultados);
  }



  public removerDocumentoFileUpload = (
    event: any,
    file: File,
    anexosUploader: FileUpload
  ): void => {
    const index = anexosUploader.files.indexOf(file);
    anexosUploader.remove(event, index);
    // this.vp.anexo_files = anexosUploader.files;
  };

  downloadFile(anexo: AnexoFile) {
    if (anexo && anexo.bytes && anexo.file && anexo.file.type) {
      const arrayBuffer = anexo.bytes;
      const blob = new Blob([new Uint8Array(arrayBuffer)], { type: anexo.file.type });

      // Cria um link temporário
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = anexo.file.name;

      // Simula um clique no link
      link.click();

      // Libera a URL e remove o link
      window.URL.revokeObjectURL(url);
      link.remove();
    } else {
      console.error('Anexo inválido.');
    }
  }

  public removerArquivo(file: AnexoFile): void {
    const index = this.vp.anexo_files2.findIndex(anexo => anexo.file.name === file.file.name);
    if (index !== -1) {
      this.vp.anexo_files2.splice(index, 1); // Remove o arquivo da lista
    }
  }


  public enviarDocumentos(anexosUploader: FileUpload) {
    const arquivos: any[] = [];

    const lerArquivo = (file: File) => {
      return new Promise<number[]>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          const bytes = Array.from(new Uint8Array(arrayBuffer)) as number[];
          resolve(bytes);
        };
        reader.onerror = (event) => {
          reject(event.target?.error);
        };
        reader.readAsArrayBuffer(file);
      });
    };

    // Verifique se o arquivo já existe na lista
    const arquivoJaExiste = (file: File) => {
      return this.vp.anexo_files2.some(anexo => anexo.file.name === file.name);
    };

    const promises = Array.from(anexosUploader.files).map(async (fileAnexo) => {
      // Verifique se o arquivo já existe antes de adicioná-lo
      if (!arquivoJaExiste(fileAnexo)) {
        const bytes = await lerArquivo(fileAnexo);
        const file = {
          name: fileAnexo.name,
          type: fileAnexo.type,
          size: fileAnexo.size,
          lastModified: fileAnexo.lastModified,
        };
        arquivos.push({ file, bytes });
      }
    });

    Promise.all(promises)
      .then(() => {
        // Adicione novos arquivos à lista existente (mantendo os existentes)
        this.vp.anexo_files2 = [...this.vp.anexo_files2, ...arquivos];

        const anexo_files_string = JSON.stringify(this.vp.anexo_files2);

        console.log(anexo_files_string);

        this.vp.anexo_files2_string = anexo_files_string;
      })
      .catch((error) => {
        console.error('Erro ao ler arquivos:', error);
      });

    anexosUploader.clear();
  }

}
