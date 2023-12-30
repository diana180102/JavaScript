function diffArray(arr1, arr2) {
  let newArr = [];

  newArr = arr1
    .filter((valor) => !arr2.includes(valor))
    .concat(arr2.filter((valor2) => !arr1.includes(valor2)));

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

//Esperando:[1, 2, 3, 5], [1, 2, 3, 4, 5] debe devolver [4].
//["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] debe devolver ["pink wool"].
