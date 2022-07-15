function myReplace(str, before, after) {
     let palabra = "";
      if(before.charAt(0) === before.charAt(0).toUpperCase()){
          palabra  = after.charAt(0).toUpperCase() + after.slice(1);
             console.log(str.replace( before, palabra)); 
      }else if(before.charAt(0) === before.charAt(0).toLowerCase()){
           palabra  = after.charAt(0).toLowerCase() + after.slice(1);
           console.log(str.replace( before, palabra)); 
      }
      else{
         console.log(str.replace( before, after)); 
      }
     
     //console.log(str.replace( before, after)); 
    
  return str;
}

myReplace("I think we should look up there", "up", "Down");