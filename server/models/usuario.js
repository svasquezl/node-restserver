const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        require: [true, 'El correo es requerido'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'El password es obligatorio']
    },
    img: {
        type: String,
        require: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObjet = user.toObject();
    delete userObjet.password;

    return userObjet;
};

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser unico'
});
module.exports = mongoose.model('usuario', usuarioSchema);