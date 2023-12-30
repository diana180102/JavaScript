function smallestCommons(arr) {
  let order = arr.sort((a, b) => a - b); // Orden de menor a mayor

  let max = Math.max(...order);
  let min = Math.min(...order);
  let mcm = min;

  for (let i = min; i <= max; i++) {
    mcm = (mcm * i) / mdc(mcm, i);
  }

  console.log(mcm);

  return mcm;
}

//Calculo del Máximo Común Divisor
function mdc(a, b) {
  while (b !== 0) {
    let c = 1;

    c = b;
    b = a % b;
    a = c;

    //  console.log(a);
  }

  return a;
}

smallestCommons([1, 5]);
