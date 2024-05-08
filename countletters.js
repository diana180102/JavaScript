function contarLetra(texto, letra) {
  // Implementación
  let count = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      count++;
    }
  }

  return count;
}

console.log(contarLetra("banana", "a")); // 3
