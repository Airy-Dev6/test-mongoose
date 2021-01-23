const mongoose = require('mongoose')

const url = 'mongodb+srv://airyDev:nomelase@kodemiadbclase.9mxwv.mongodb.net/kodemiaDecGen'

// Modelos
// Represntan una coleccion y la forma de los documentos en ella
// para crearlos necesitamos 2 cosa: 
// 1. El nombre de la coleccion que represneta 
// 2. la dorma de los documentos respresentada en un esquema

// Los modelos inician con mayuscula
const schemaKoder = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        trim: true,
        required: true
    },

    age: {
        type: Number, 
        min: 15,
        max: 100, 
        required: true
    }
})
const Koder = mongoose.model('koders', schemaKoder)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('ya estamos conectados') 
    /* Koder.find({ gender: {$exists: true}})
      .then((resultado) => {
        console.log('resultado: ', resultado)
      })
      .catch(error => console.error()) */
    
      Koder.create({
        name: 'Arnold', 
        age: 25
      })
      .then((resultado) => {
        console.log('resultado: ', resultado)
      })
      .catch(error => console.error('ERROR',error))
})
.catch(error => console.error('ERROR',error))
 