/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return (Object.entries(objeto));
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjhfacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   // NumberOfChar = {}
//    for (let j=0; j<string.length; j++) { 
//       let letterOne = string[j];
//       let count = 0;
//       for (let i=0; i<string.length; i++) {
//          if(string[i] === letterOne) {
//             count += 1
//          };
//    };
//    NumberOfChar[letterOne] = count;
// };
//    return NumberOfChar

string = string.toLowerCase();
NumberOfChar = {};
    for (char of string) {
      NumberOfChar[char] = (NumberOfChar[char] ?? null) + 1
      }
    return NumberOfChar
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayArray = [];
   let minArray = [];
   // for (let i=0; i< string.length; i++) {
   //    if(string[i] === string[i].toUpperCase()) {
   //       mayArray.push(string[i]);
   //    }; if (string[i] === string[i].toLowerCase()) {
   //       minArray.push(string[i]);
   //    };
   // };
   for (char of string) {
      if(char === char.toUpperCase()) {
         mayArray.push(char);
      } else {
         minArray.push(char);
      };
   };
   const letrasG = mayArray.toString().replace(/,/g, '');
   const letrasP = minArray.toString().replace(/,/g, '');
   return `${letrasG}${letrasP}`
 }

   
   

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   String.prototype.reverse = function(){
      let arrayReverse = [];
      stringSeparada = this.split('');
      for(let i=stringSeparada.length-1; i>=0 ; i--) {
         letterI = (stringSeparada.pop());
         arrayReverse.push(letterI);
      };
      return arrayReverse.join('');
   };
   const fraseInversa =  frase.reverse();
   const fraseReversa = fraseInversa.split(' ').reverse().join(' ');
   return fraseReversa;
   
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   String.prototype.reverse = function(){
      let arrayReverse = [];
      stringSeparada = this.split('');
      for(let i=stringSeparada.length-1; i>=0 ; i--) {
         letterI = (stringSeparada.pop());
         arrayReverse.push(letterI);
      };
      return arrayReverse.join('');
   };

   const number = numero.toString();
   if (number === number.reverse()) {
      return "Es capicua";
   } else {
      return "No es capicua";
   };
};

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const newStr = string.replace(/[a-c]/g, '')
   return newStr;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   const array = arrayOfStrings
   for(let i = 0; i <= array.length-1; i++){
      for(let j = 0; j < ( array.length - i -1); j++){
          if(array[j].length > array[j +1].length){
               let auxiliar = array[j];
               array[j] = array[j + 1];
               array[j+1] = auxiliar;
               };
      }};
  return array
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3] = [3].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let array3 = [];
   for (let j=0; j<array2.length; j++) {
      for (let i=0; i<array1.length; i++) {
         if (array1[i] === array2[j]) {
            array3.push(array1[i])
         };
      };
   };
   return array3;
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
