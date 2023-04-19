console.log('06-functions');
//a.Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
//resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('Excercise 6a.:');
function sum(a,b){
    return a+b;
}
var x = 10;
var y = 5;
var resultado=sum(x,y)
console.log('The result of ' + x + ' + ' + y + ' is equal to ' + resultado)

//b.Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; 
//de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y 
//retornar el valor NaN como resultado.
console.log('Excercise 6b.:');
function newSum(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        alert('Error,one of the parameters is not a number');
        return NaN;
    }
    return a+b;
}
var x = 10;
var y = 5;
var resultado=newSum(x,y)
console.log('The result of ' + x + ' + ' + y + ' is equal to ' + resultado)
//c.Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('Excercise 6c.:');
function validateInteger(a){
    return Number.isInteger(a);
}
x = 3.14;
result = validateInteger(x)
console.log(x + ' is an integer number? ' + result)
//d.Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y 
//que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número 
//convertido a entero (redondeado).
console.log('Excercise 6d.:');
function sumWithInteger(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        alert('Error,one of the parameters is not a number');
        return NaN;
    } else{
        if (!validateInteger(a)){
            a=Math.round(a);
            alert('Input number 1 is not a whole number, so it was rounded to ' + a)
        }
        if (!validateInteger(b)){
            b=Math.round(b);
            alert('Input number 2 is not a whole number, so it was rounded to ' + b)
        }
        return a+b;
    }
}

x=4;
y=12.6;
result = sumWithInteger(x,y);

console.log('The result of '+ x +' + '+  y +' is equal to: '+ result);
//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
//que todo siga funcionando igual que en el apartado anterior.
console.log('Excercise 6e.:');
function roundNumber(z) {
    if (!validateInteger(z)) {
        z = Math.round(z);
        alert('Input is not a whole number, so it was rounded to ' + z);
    }
    return z;
}

function sumWithIntegerAsFunction(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        alert('Error,one of the parameters is not a number');
        return NaN;
    } else{
      a = roundNumber(a);
      b = roundNumber(b);
        
      return a+b;
    }
}
x=4;
y=12.6;
result = sumWithIntegerAsFunction(x,y);

console.log('The result of '+ x +' + '+  y +' is equal to: '+ result);
