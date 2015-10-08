module.exports = function(app) {
  var ContatosController = {
    index: function(req, res) {
      var usuario = req.session.usuario
        , params = {usuario: usuario};

      if (usuario) {
        res.render('contatos/index', params);
      } else {
        res.redirect('/');
      }
    }
  };
  return ContatosController;
}