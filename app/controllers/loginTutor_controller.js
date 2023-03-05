var LoginTutor = require("../models/loginTutor");

var LoginTutorController = {
    index: function(req, res, next) {   
        var erro = req.query.erro;
        if(erro === undefined){
            erro = "";
        }         
        res.render('./loginTutor/index', { erro: erro });
    },
    
    autenticar: function(req, res, next) {
        var login = new LoginTutor();
        login.login = req.body.login;
        login.senha = req.body.senha;
        login.autenticar(function(retorno){
            if(retorno.erro){     
                var erro = retorno.mensagem;
                if(erro === undefined){
                    erro = "";
                }         
                res.render('./loginTutor/index', {erro: erro}); 
            }
            else {
                res.redirect('/tutores'); 
            }            
        });         
    },
};

module.exports = LoginTutorController;