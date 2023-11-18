function reverseString(str) {

    let str1;
    let eliminados;
    let cadena = [];


    str1 = str.split('');

    for (let i = 0; i < str.length; i++) {

        eliminados = str1.pop();

        cadena.push(eliminados);

    }

        return cadena.join('');
}

reverseString("hello");