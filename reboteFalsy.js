function bouncer(arr) {
   
   let newArray = arr.slice();
  

     for (let i = 0; i < arr.length; i++) {
         if(arr[i] === false || 
            arr[i] === null  ||
            arr[i] === 0 || 
            arr[i] === "" ||
            arr[i] === undefined ||
            Number.isNaN(arr[i])){

           newArray[i] = false;
          }

            
      
     }


    
      
        newArray = newArray.filter(element => element !== false);

        console.log(newArray);


    

     
  
  
  return newArray;
}

// bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);
// bouncer([null, NaN, 1, 2, undefined]);