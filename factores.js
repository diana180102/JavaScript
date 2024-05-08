function factores(numero) {
  // Implementación

  for (let i = 0; i < numero; i++) {
    if (numero % i === 0) {
      console.log(i);
    }
  }
}

factores(12);
// Imprime:
// 1
// 2
// 3
// 4
// 6
// 12
