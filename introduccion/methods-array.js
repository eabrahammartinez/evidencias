const tecnologias = ['JavaScript','Java','React','php','Python'];

const tech01 = tecnologias.map(lenguaje => {
    if( lenguaje === 'React'){
        return 'Tecnología detectada';
    } else{
        return lenguaje;
    }
});

console.log(tech01);

const tech02 = tecnologias.filter(lenguaje => {
    return lenguaje === 'Java';
});

console.log(tech02);


const edades = [20,40,60,30,50,12,5,50,3,24,56,25,24,6,78,12];

const tech03 = edades.filter(edad => {
    return edad > 20;
});

console.log(tech03);

// Filtra los resultados dependiendo la condicion
const arr30 = edades.filter(edad => edad >30);

// Regresa la prier coincidencia encontrada 
const arrFind = edades.find(edad=> edad> 30);
console.log(arrFind);

//Comprueba que todos los lemeentos que hay cumplan y regresa true o false. 
const arrEvery=edades.every(edad=>edad>2);
console.log(arrEvery);


// Reduce - Acumula en el total
const arryReduce = edades.reduce((total,edad) => edad + total,0 );
console.log(arryReduce);
