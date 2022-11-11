const router = require("express").Router();
const { check } = require('express-validator');
// const validarJWT = require("../midelware/validarJWT");
// const{validateResult}= require('../helpers/valitdateHelpers')
// const {
//     check
// } = require('express-validator')

const {
    getUsuarios,
    postUsuarios,
    getById,
    putUsuarios,
    deleteUsuarios

} = require("../controllers/register.controllers");

// const {validationResult}= require('express-validator')

validateCreate= require('../validators/register')

router.post("/usuario", [
    check('username', "ingrese un usuario")
    .exists()
    .isLength({max:15})
    .not()
    .isEmpty(),

    check("email")
    .exists()
    .isEmail(),

    check("password")
    .exists()
    .isLength({min:7}),

    check("veriPass")
    .exists()
    .isLength({min:7}),
    
    check("role")
    .exists()
    .not()
    .isEmpty(),

    validateCreate
 
] ,postUsuarios);
// router.get("/usuario",[validarJWT] ,getUsuarios);
// router.get("/usuario/:id",[validarJWT],getById);
// router.post("/usuario",[validarJWT], postUsuarios);
// router.put("/usuario/:id",[validarJWT],putUsuarios);
// router.delete("/usuario/:id",[validarJWT],deleteUsuarios);

module.exports = router;



// El método Router() de Express nos permite crear rutas
// const router = require('express').Router();

// Importando controladores
// const {
//     getUsers,
//     postUser,
//     putUser,
//     deleteUser,

// } = require('../controllers/user.controllers');

// const esAdmin = require('../middlewares/es-admin');

