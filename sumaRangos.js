function sumAll(arr) {

    let sum = 0;
    let order = arr.sort((a, b) => a - b);
    let inicio = arr[0];

    console.log(order);



    for (let i = inicio; i <= arr[1]; i++) {
        sum += i;

    }



    console.log(sum);

    return sum;
}

sumAll([1, 4]);
//   sumAll([4, 1]);


//sumAll([1, 4]) debe devolver 10.