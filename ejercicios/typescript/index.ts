// Boolean
let muted: boolean = true;
muted = false;

// Números
let numerador: number = 45;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Richard";
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
people.push("9000");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);

// Enum
enum Color {
    Rojo = "Rojo", 
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = "Joker";
comodin = { type: "wildcard" };

// Object
let someObject: object = { type:'Wildcard' }

// Funciones 
function add(a: number, b: number): number {
    return a + b;
}
const sum = add(4,6)

function createAdder(a: numbert): (number) => number {
    return function(b:number){
        return b + a;
    }
}

const addFour =  createAdder(4);
const fourPlus6 = addFour(6)

// Funciones con parámetros opcionales
function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('Alberto', 'Zavala');
const richard2 = fullName('Agente');
