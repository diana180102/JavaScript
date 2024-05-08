function sumFibs(num) {
  let sum = 1;
  let acum = 0;
  let cont = 0;

  do {
    sum = sum + acum;

    console.log(sum);
    cont++;
  } while (num === sum);

  acum = sum;

 
}

sumFibs(4);

console.log(sumFibs(4));
