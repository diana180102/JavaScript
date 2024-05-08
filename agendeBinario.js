function binaryAgent(str) {

  let cadenaBinaria = str.split(' ');
  

  let texto = '';
  
  //iteramos sobre la cantidad de item dentro del arreglo de cadenaBinaria
  for (let i = 0; i < cadenaBinaria.length; i++) {

    let decimal = 0;


    //SI elemento de cadena binaria tiene 8 bits, ENTONCES va iterar sobre cada uno de los 8 bits
    if (cadenaBinaria[i].length === 8) {
      for (let j = 0; j < 8; j++) {
        
        if (cadenaBinaria[i].charAt(j) === '1') {
          decimal += Math.pow(2, 7 - j)

         
        }

      }

      texto+= String.fromCharCode(decimal);

    }

  }

  console.log(texto);





  return texto;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");