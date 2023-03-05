var Base = require("./base");

var LoginUser = function(loginUser){
    this.restName = "loginUser";

    if(loginUser != undefined){
        this.loginUser = usuario.loginUser;
        this.senha = usuario.senha;
    }
    else{
        this.loginUser = "";
        this.senha = "";
    }
};

LoginUser.prototype = new Base();

module.exports = LoginUser;