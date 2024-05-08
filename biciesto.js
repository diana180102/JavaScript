function esBisiesto(año) {

    

  if(año % 4 === 0 && año % 100 !== 0 ||  año % 400 == 0  ){
     
     return true;
  }

  return false;
  // completar
}

console.log(esBisiesto(2020)); // true
console.log(esBisiesto(2012)); // true
console.log(esBisiesto(2015)); // false