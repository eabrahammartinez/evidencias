//Destructuring de arrays 

const personajes = ['Iron man ','Spider man ','Thor','Mujer Maravilla'];

const [d] = personajes;

console.log(d);

const regresaArreglo = () => {
     return ['ABC', 123];
}

const [arreglo, numeros] = regresaArreglo();
console.log(arreglo, numeros);

//Ejercicio 
const useState = (valor) => {
    return [valor , ()=> {console.log('Hola como estas?')}]
};

const arr = useState('Abraham,');
console.log(arr);

arr[1]();
console.log(arr[0]);

//Tarea: Destructurar el arreglo y la funcion debera llamarse getSaludo. 

//Ejercicio 
const useState2 = (valor) => {
    return [valor , ()=> {console.log('Hola como estas?')}]
};

const [,getSaludo2] = useState2('Abraham,');
getSaludo();