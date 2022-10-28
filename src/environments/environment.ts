export const environment = {
  production: false,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (error) {
      return error;
    }
  },
  urlpadrao: window.location.origin ?? '',
  gedpapel: [
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
