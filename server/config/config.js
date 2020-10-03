process.env.PORT = process.env.PORT || 3000;

//============================================
// Entorno
//============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//============================================
// BaseDatos
//============================================
let urlDB
if (process.env.NODE_ENV === 'dev') {
    urlDb = 'mongodb: //localhost:27017/cafe'
} else {
    urlDB = 'mongodb + srv: //admin:L7nraIk3furUkdp6@cluster0.wawjm.mongodb.net/cafe'
}