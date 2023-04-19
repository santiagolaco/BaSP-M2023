console.log('02-strings');
//a.Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
// (utilizar toUpperCase).
console.log('Excercise 2a.');
var a = 'Hola, este es un string de prueba.';
var stringMayuscula = a.toUpperCase();
console.log(stringMayuscula);
//b.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
// guardando el resultado en una nueva variable (utilizar substring).
console.log('Excercise 2b.');
var a = 'Hola, este es un string de prueba.';
var cincoLetrasString = a.substring(0,5);
console.log(cincoLetrasString);
//c.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
// guardando el resultado en una nueva variable (utilizar substring).
console.log('Excercise 2c.');
var a = 'Hola, este es un string de prueba.';
var tresLetrasString = a.substring(a.length-3,a.length);
console.log(tresLetrasString);
//d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
//mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
//toLowerCase y el operador +).
console.log('Excercise 2d.');
var a = 'hola, este es un string de prueba.';
var firstLetter = a.substring(0,1);
var restoEnunciado = a.substring(1);
var resultado = firstLetter.toUpperCase() + restoEnunciado.toLowerCase();
console.log(resultado);
//e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
//primer espacio en blanco y guardarla en una variable (utilizar indexOf)
console.log('Excercise 2e.');
var a = 'hola, este es un string de prueba.';
var firstSpace = a.indexOf(' ');
console.log(firstSpace);
//f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar
//los métodos de los Excercises anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en
//mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('Excercise 2f.');
var a = 'santiago laco';
var firstSpace = a.indexOf(' ');
var firstCapsLetter = a.substring(0,1);
var secondCapsLetter = a.substring(firstSpace+1,firstSpace+2);
var resultado = firstCapsLetter.toUpperCase()+a.substring(1,firstSpace+1).toLowerCase()+secondCapsLetter.toUpperCase()
    +a.substring(firstSpace+2).toLowerCase();
console.log(resultado);
