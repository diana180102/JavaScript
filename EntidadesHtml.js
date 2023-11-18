function convertHTML(str) {
    
    let newString;

    let entidades = {
       '&' : '&amp;',
       '<' : '&lt;',
       '>': '&gt;',
       '"':  '&quot;',
        "''": '&apos;'
    }

       newString =  str.replace(/[&<>"']/g, function(valor){
          return entidades[valor];
       });

       console.log(newString);

  }
  
  convertHTML("Dolce & Gabbana");