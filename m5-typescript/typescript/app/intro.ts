import { Color, Persona } from "../interface/persona";

let saludo = "Hola mundo";

let nombre: string = "Juan";

let edad: number = 23;

let esMayor: boolean = true;

let colores: string[] = ["rojo", "verde", "azul"];

let colores2: Array<string> = ["rojo", "verde", "azul"];

enum diasSemana {
  Lunes,
  Martes,
  Miércoles,
  Jueves,
  Viernes,
  Sábado,
  Domingo,
}

let hoy: diasSemana = diasSemana.Lunes;

// Funciones con tipos y parámetros de retorno

function saludar(nombre: string): string {
  return `Hola ${nombre}, ¿cómo estás?`;
}

console.log(saludar("Pedro"));

function saludar2(nombre: string): void {
  console.log(`Hola saludo 2 ${nombre}`);
}

saludar2("Daniel");

// Clases con propiedades y métodos tipados
class Producto {
  constructor(public nombre: string, public precio: number) {}
  mostrarDetalles():void{
    console.log(`Producto: ${this.nombre}, precio: ${this.precio}`);
  } 
}

let colors:Color = "rojo"

// Uso de tipos genéricos
function duplicar<T>(valor: T){
  return valor
}

const numeroDuplicado:number = duplicar(5)
const textoDuplicado:string = duplicar("Hola")

const persona:Persona = {
  nombre: "Luis",
  edad: 25,
  direccion: {
    calle: "San Juan",
    numero: 12
  }
}

interface Animal {
  nombre: string,
  tipo: string
}

interface Pajaro extends Animal {
  colorPlumaje: string
}

const Tortuga:Animal = {
  nombre: "Manuelita",
  tipo: "acuatico"
}

const Turpial:Pajaro = {
  nombre: "Turpial",
  tipo: "ave",
  colorPlumaje: "amarillo"
}