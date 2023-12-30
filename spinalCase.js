function spinalCase(str) {
   
   let cadena = str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();

    
   console.log(cadena);
  return str;
}

// spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");