function truncateString(str, num) {
    
      let recorte 

      if(str.length > num){
        recorte = str.slice(0, num) + '...';
      }else{
        recorte = str.slice(0, num);
      }

       console.log(recorte);

    return recorte;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)