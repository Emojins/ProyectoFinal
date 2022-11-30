const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    confirmpassw:{
            type: String
            
    },

    email: {
        type: String,
       
    },
    isActive: {
        type: Boolean,
        
        default: true,
    },

    role:{
        type: String,
        // required: true
        
    }
},{
    versionKey: false,
    timestamps: true
})
module.exports=model('Usuario',usuarioSchema);



