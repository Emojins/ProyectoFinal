const {validateResult}= require('express-validator');

// validateResult :captura el error, de lo contrario pasa por el next

const validationResult=(req,res,next) => {

try {
    validationResult(req).throw()
    return next()
    
} catch (err) {
    res.status(403)
    res.send({errors: err.array() })
    
}

}

module.exports={validateResult}