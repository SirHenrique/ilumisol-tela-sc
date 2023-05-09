export const environment = {
  production: false,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (error) {
      return error;
    }
  },
  url_padrao: window.location.origin ?? '',
  ged_papel: [
    {
      active: true,
      permissionLevel: 3,
      subject: 'admin',
      type: 'ROLE',
    },
  ],
  s1_etapa1: 'etapa1',
  s2_etapa2: 'etapa2',
};
