function mutation(arr) {
    
    let letters = arr.pop().toLowerCase();
    let result;
    let len = 0;

    //  console.log(letters);

    if(arr[0].length > letters.length){
        len = arr[0].length;
    }else{
        len = letters.length;
    }
    
    for (let i = 0; i < len; i++) {
        
        result = arr[i].indexOf(letters);
        
    }
     
     console.log(result);
}

// mutation(["hello", "hey"]);
// mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);