var Base = require("./base");

var LoginTutor = function (loginTutor) {
  this.restName = "loginTutor";

  if (loginTutor != undefined) {
    this.loginTutor = usuario.loginTutor;
    this.senha = usuario.senha;
  } else {
    this.loginTutor = "";
    this.senha = "";
  }
};

LoginTutor.prototype = new Base();

module.exports = LoginTutor;
