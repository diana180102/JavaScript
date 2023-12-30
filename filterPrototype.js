Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) == true) {
          newArray.push(this[i]);
        }
      }
   
    // Cambia solo el código encima de esta línea
    return newArray;
  };