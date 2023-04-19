console.log('03-arrays');
//a.Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
//'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('Excercise 3a.:');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
    'Noviembre', 'Diciembre'];
console.log('Month 5 is ' + months[4] + ' and month 11 is ' + months[10]);
//b.Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('Excercise 3b.:');
console.log(months.sort());
//c.Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('Excercise 3c.:');
months.push('Enero')
months.unshift('Diciembre')
console.log(months);
//d.Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('Excercise 3d.:');
months.pop()
months.shift()
console.log(months);
//e.Invertir el orden del array (utilizar reverse).
console.log('Excercise 3e.:');
console.log(months.reverse());
//f.Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('Excercise 3f.:');
console.log(months.join(' - '));
//g.Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('Excercise 3g.:');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
    'Noviembre', 'Diciembre'];
console.log(months.slice(4,11));
