var http = require('http');
var fs = require('fs');
var url = require('url');

var diretorio = function(arquivo){
  return __dirname + "/" + arquivo;
};

// Funçao simples de gerenciamento a rotas.
var rotear = function(pathname){
  if(pathname && pathname != "/"){
    var arquivo = diretorio(pathname + ".html");
    var existe = fs.existsSync(arquivo);

    if(existe){
      return arquivo;
    }
    return diretorio("erro.html");
  }
  return diretorio("artigos.html");
};

var server = http.createServer(function(request, response){
  // Obtendo o pathname digitado no browser
  var pathname = url.parse(request.url).pathname;
  // Processando roteamento do pathname
  var pagina = rotear(pathname);

  // Renderizando a pagina html
  fs.readFile(pagina, function(err, html){
    response.writeHeader(200, {'Content-Type': 'text/html'});
    response.end(html);
  });
});

server.listen(3000, function(){
  console.log('Executando Desafio');
});