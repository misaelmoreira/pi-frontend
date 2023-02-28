var express = require('express');
var HomeController = require('../controllers/home_controller');
var UsuariosController = require('../controllers/usuarios_controller');
var TutoresController = require('../controllers/tutores_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);

router.get('/usuarios', UsuariosController.index);
router.get('/usuarios/novo', UsuariosController.novo);
router.post('/usuarios/cadastrar', UsuariosController.cadastrar);
router.get('/usuarios/:id/editar', UsuariosController.editar);
router.post('/usuarios/:id/atualizar', UsuariosController.atualizar);
router.get('/usuarios/:id/excluir', UsuariosController.excluir);


router.get('/tutores', TutoresController.index);
router.get('/tutores/novo', TutoresController.novo);
router.post('/tutores/cadastrar', TutoresController.cadastrar);
router.get('/tutores/:id/editar', TutoresController.editar);
router.post('/tutores/:id/atualizar', TutoresController.atualizar);
router.get('/tutores/:id/excluir', TutoresController.excluir);

module.exports = router;
