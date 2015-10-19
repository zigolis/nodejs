var app = require('../../app')
  , request = require('supertest')(app);

describe('No controller home', function() {
  it('Deve retornar status 200 ao fazer GET /', function(done) {
    request.get('/').end(function(err, res) {
      res.status.should.eql(200);
      done();
    });
  });

  it('Deve ir para a rota / ao fazer GET /sair', function(done) {
    request.get('/sair').end(function(err, res) {
      res.header.location.should.eql('/');
      done();
    });
  });

  it('Deve ir para a rota /contatos ao fazer POST /entrar', function(done) {
    var login = {
      usuario: {nome: 'Teste', email: 'teste@teste'}
    };

    request.post('/entrar')
           .send(login)
           .end(function(err, res) {
      res.headers.location.should.eql('/contatos');
      done();
    });
  });

  it('Deve ir para a rota / ao fazer POST /entrar', function(done) {
    var login = {
      usuario: {nome: '', email: ''}
    };

    request.post('/entrar')
           .send(login)
           .end(function(err, res) {
      res.headers.location.should.eql('/');
      done();
    });
  });
});