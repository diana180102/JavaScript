
//Función Constructora
function Contador (valorInicial){
     this.valorInicial = valorInicial;
}


Contador.prototype.incrementar = function() {
    this.valorInicial++;
};

Contador.prototype.decrementar = function() {
    this.valorInicial--;
};

Contador.prototype.reset = function() {
    this.valorInicial = 0;
};

Contador.prototype.mostrarValor = function() {
    return this.valorInicial;
};


const miContador = new Contador(0);

miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
console.log(miContador.mostrarValor());  // Debería imprimir: 3
 
miContador.decrementar();
console.log(miContador.mostrarValor());  // Debería imprimir: 2
 
miContador.reset();
console.log(miContador.mostrarValor());
