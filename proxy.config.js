const proxy = [
    {
      context: '/tst',
      target: 'http://api-int.grupodimedservices.com.br',
      pathRewrite: {'^/tst' : ''}
    }
  ];

exports = proxy;