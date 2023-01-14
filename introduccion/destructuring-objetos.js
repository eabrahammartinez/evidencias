//Destructuracion 
//const nombre = 'Xenia';
/*
const persona = {
    nombre: 'Peter Parker',
    edad: 20,
    clave: 'Spiderman'
}

const {nombre:nombre2} = persona;
console.log(nombre2);

console.log(typeof nombre2); 


console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
*/


const persona = {
    nombre: 'Peter Parker',
    edad: 20,
    clave: 'Spiderman',
    superpoder: 'Escalar paredes'
    
};

const { clave, nombre:propiedad_nombre,edad } = persona;



const imprimePersona = ({nombre='Nobody',edad,clave,superpoder='Lanzar telarañas'}) => {    
    // console.log(`Hola ${nombre} tienes ${edad} años y eres ${clave} y su superpoder es ${superpoder} `);
    return {
        nombreClave : clave,
        nombreSuperpoder: superpoder
    }
}

const avenger = imprimePersona( persona );

const {nombreClave:heroe, superpoder} = avenger;

console.log(heroe);