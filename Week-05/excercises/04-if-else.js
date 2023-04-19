console.log('04-if-else');
//a.Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 
//0,5 mostrar una console.loga con el mensaje “Greater than or equal to 0,5” y sino un console.loga con el mensaje “Lower than 0,5”.
console.log('Excercise 4a.:');
var numberRandom = Math.random();
console.log('The random number is: ' + numberRandom )
if (numberRandom >= 0,5) {
    alert('Greater than or equal to 0,5');
} else {
    alert('Lower than 0,5');
}
//b.Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de console.loga:
//1-“Bebe” si la edad es menor a 2 años;
//2-“Niño” si la edad es entre 2 y 12 años;
//3-“Adolescente” entre 13 y 19 años;
//4-“Joven” entre 20 y 30 años;
//5-“Adulto” entre 31 y 60 años;
//6-“Adulto mayor” entre 61 y 75 años;
//7-“Anciano” si es mayor a 75 años.
console.log('Excercise 4b.:');
var age = 2;
if (age < 2) {
    alert('Bebe');
} else if (age < 13) {
    alert('Niño');
}else if (age < 20) {
    alert('Adolescente');
}else if (age < 31) {
    alert('Joven');
}else if (age < 61) {
    alert('Adulto');
}else if (age < 76) {
    alert('Adulto mayor');
}else   {
    alert('Anciano');
}