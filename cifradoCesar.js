function rot13(str) {
    const abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let desplazamiento = 0;
    let newPosition = 0;
    let letra = '';

    for (let j = 0; j < str.length; j++) {
        let char = str.charAt(j);

        // Verificar si el carácter es una letra
        if (/[A-Z]/.test(char)) {
            for (let i = 0; i < abecedario.length; i++) {
                if (char === abecedario[i]) {
                    desplazamiento = i - 13;
                    break;
                }
            }

            // Calcular la nueva posición
            newPosition = (desplazamiento + abecedario.length) % abecedario.length;

            // Construir la cadena resultante
            letra += abecedario[newPosition];
        } else {
            // Conservar caracteres que no son letras sin cambios
            letra += char;
        }
    }
    
    console.log(letra);
}

rot13("SERR PBQR PNZC");
