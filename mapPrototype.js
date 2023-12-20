Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
    this.forEach((element, index, originalArr) =>
    newArray.push(callback(element, index, originalArr))
    );
    // Cambia solo el código encima de esta línea
    return newArray;
  };