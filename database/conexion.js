const mongoose = require("mongoose");

const connection =  async () => {

   try {
      await mongoose.connect("mongodb://0.0.0.0:27017/gymaccess");
      console.log("Conectado a BDD a Gym Access");
   } catch (error) {
      console.log( "No se ha podido conectar correctamente a la BBD Gym Access");
    
   }
}

module.exports = connection