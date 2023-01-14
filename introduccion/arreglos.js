

const arr=['pan','manzana','Queso','Pavo'];

arr.splice(2,1,'Rosca de pavo');

//Agregar al arreglo push
//arr.push('Tamales');
//arr.push('Jamon');

//console.log(arr.length);
//console.log(arr.pop());
//console.log(arr.length);
//console.log(arr.pop());

//arr.unshift('Atole');
//arr.splice(3,1,'Rosca de pavo')

//Ejemplo 1 


//arr.push(20);
//arr.push('Abraham 900');
//arr.push({nombre: 'jackson',edad:30})

//console.log(arr[2]);

//for(let i=0;i<arr.length;i++)
//{
//    console.log(arr[i]);
//}

//Este ciclo itera con respecto al contenido del array.

//for(const item of arr){
//    console.log(item)
//}

for(const item in arr){
    console.log(item)
}
