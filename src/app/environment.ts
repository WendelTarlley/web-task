// environment.ts
export const environment = {
    production: false,
    apiUrl: determineApiUrl(),
  };
  
  function determineApiUrl(): string {
    const host = window.location.hostname;
  
    if (host.includes('localhost')) {
      return 'http://localhost:8081/';
    } else if (host.includes('homologacao')) {
      return 'https://api.homologacao.com';
    } else {
      return 'https://api.producao.com';
    }
  }
  