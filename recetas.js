function Receta (titulo, ingredientes, instrucciones){
   
    this.titulo = titulo;
    this.ingredientes = ingredientes;
    this.instrucciones = instrucciones;

}


Receta.prototype.mostrarReceta = function () {
    
    return ` \n
             Titulo de la receta :  ${this.titulo}\n 
             Ingredientes : ${this.ingredientes}\n
             Instrucciones: ${this.instrucciones}   `;

}

Receta.prototype.cambiarTitulo = function (nuevoTitulo){
    this.titulo = nuevoTitulo;
}

Receta.prototype.añadirIngrediente = function (ingrediente) {
    this.ingredientes += ingrediente; 
}

Receta.prototype.editarInstrucciones = function (nuevasInstrucciones){
    this.instrucciones = nuevasInstrucciones;
}

const pastelDeChocolate = new Receta("Pastel de Chocolate", 
                                     "Harina, Chocolate, Azúcar, Huevos", 
                                     "Mezclar ingredientes y hornear a 180°C por 30 minutos." );

console.log(pastelDeChocolate.mostrarReceta());

 
pastelDeChocolate.cambiarTitulo("Super Pastel de Chocolate");
pastelDeChocolate.añadirIngrediente("Vainilla");
pastelDeChocolate.editarInstrucciones("Mezclar ingredientes, añadir un toque de amor y hornear a 180°C por 35 minutos.");
 
console.log(pastelDeChocolate.mostrarReceta());

