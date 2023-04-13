const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    editable: {
        type: Boolean,
        required: true
    }
},{
    timestamps: true,
});

//Exportamos la clase User
module.exports = mongoose.model('User', UserSchema);