const router =require('express').Router()

const {iniciarSesion}=require("../controllers/login")

router.post("/login",iniciarSesion)

module.exports = router;

