function titleCase(str) {
  let palabras = str.split(" ");
  let capitalize = [];

  for (let i = 0; i < palabras.length; i++) {
    capitalize[i] = palabras[i].toUpperCase().charAt() + palabras[i].slice(1).toLowerCase();
  }
  console.log(capitalize.join(" "));
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
