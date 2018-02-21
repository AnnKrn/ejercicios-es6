// let vs var

// las llaves son las que delimitan los bloques
let word = 'hola'

for (let i = 0; word.length; i++) {
    console.log(i)
}
console.log(i)

// const vs var

// variable que no va a tener mutacion
function constTest () {
    const x = 31
    if (true) {
        // si esta dentro de bloque puede haber una constante con otro valor 
        const x = 71
        console.log(x)
    }
}
console.log(x)

// const con un datos complejos como array y object
// se le puede añadis promiedades pero no se puede modificar el tipo de dato
const obj = {
    nombre: 'Amalia',
    age: '26'
}

console.log(obj)

// ejemplo con array
const array = [ 'mike', 'silvana']

console.log(array);

array.pop();
// al sacar un elemento, permite la modificación ya que no se modifica el tipo de dato
console.log(array);

// templete string. puedes hacer multiples lineas con ` tindesl invertidas
// usa interpolacion de variable $(), tanto variables como operaciones
// evita el concatenar varios strings
// detecta los saltos de linea
let timeDay = promp('ingresa hora del día')
let templete = `Los miercoles por la mañana ${timmeDay} me siento...`

console.log(templete)

// funciomes

// por hoisting 

// funcion declaration
fullName('Silvana', 'Suarez')
// al invacarla aqui si lalee
function fullName ( name, lastName) {
    return name + lastName
}

// aqui tiene argumentos

// fumciom expresion

// aqui ya no se puede llamar antes de ser declarada
fullName('Silvana' + 'Suarez')
var fullName = function(name.lastName) {
    return name + lastName
};

// arraow function se llama como expresion
const fullName = (name,lastName) => {
    return `${name + lastName}`
}
fullName('Silvana', 'Suarez')

// si solo hay un parametro se puede quitar los parentesis
// si solo es una linea se pueden quitar llaves y return
const fullName = name =>`${name}`

fullName('Silvana')