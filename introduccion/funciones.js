//function saludar(nombre){
//    console.log('Hola ' + nombre);
//}

//saludar('Paco');

/*
function saludar(){
    return 'Hola {$nombre}'
}


console.log('Saludando a${saludar('Xenia')}');
*/
/*
function saludar(){
    return 'Hola {$nombre}';
}


console.log('Saludando a${saludar('Xenia')}');
*/
const arr=['arroz','pasta','pan'];

arr.map(function item(elemento){
    console.log(elemento);
})

arr.map(elemento => {
    console.log(elemento);
})

const newArr = arr.map(elemento=>{
    return elemento.toUpperCase();
})

console.log(newArr); 