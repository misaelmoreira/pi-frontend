var express = require('express');
var HomeController = require('../controllers/home_controller');
var LoginUserController = require('../controllers/loginUser_controller');
var LoginTutorController = require('../controllers/loginTutor_controller');
var UsuariosController = require('../controllers/usuarios_controller');
var TutoresController = require('../controllers/tutores_controller');
var router = express.Router();
var LoginUserMiddleware = require("../middleware/loginUser");
var LoginTutorMiddleware = require("../middleware/loginTutor");

/* Rotas home page. */
router.get('/', HomeController.index);

/* Rotas User Login page. */
router.get('/loginUser',  LoginUserController.index);
router.post('/loginUser', LoginUserController.autenticar);

/* Rotas Tutor Login page. */
router.get('/loginTutor', LoginTutorController.index);
router.post('/loginTutor', LoginTutorController.autenticar);

/* Rotas Usuarios */
router.get('/usuarios', LoginUserMiddleware, UsuariosController.index);
router.get('/usuarios/novo', UsuariosController.novo);
router.post('/usuarios/cadastrar', UsuariosController.cadastrar);
router.get('/usuarios/:id/editar', UsuariosController.editar);
router.post('/usuarios/:id/atualizar', UsuariosController.atualizar);
router.get('/usuarios/:id/excluir', UsuariosController.excluir);

/* Rotas Tutores */
router.get('/tutores', LoginTutorMiddleware, TutoresController.index);
router.get('/tutores/novo', TutoresController.novo);
router.post('/tutores/cadastrar', TutoresController.cadastrar);
router.get('/tutores/:id/editar', TutoresController.editar);
router.post('/tutores/:id/atualizar', TutoresController.atualizar);
router.get('/tutores/:id/excluir', TutoresController.excluir);

module.exports = router;
