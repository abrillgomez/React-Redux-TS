"use strict";
let saludo = "Hola mundo";
let nombre = "Juan";
let edad = 23;
let esMayor = true;
let colores = ["rojo", "verde", "azul"];
let colores2 = ["rojo", "verde", "azul"];
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["Lunes"] = 0] = "Lunes";
    diasSemana[diasSemana["Martes"] = 1] = "Martes";
    diasSemana[diasSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    diasSemana[diasSemana["Jueves"] = 3] = "Jueves";
    diasSemana[diasSemana["Viernes"] = 4] = "Viernes";
    diasSemana[diasSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    diasSemana[diasSemana["Domingo"] = 6] = "Domingo";
})(diasSemana || (diasSemana = {}));
let hoy = diasSemana.Lunes;
// Funciones con tipos y parámetros de retorno
function saludar(nombre) {
    return `Hola ${nombre}, ¿cómo estás?`;
}
console.log(saludar("Pedro"));
function saludar2(nombre) {
    console.log(`Hola saludo 2 ${nombre}`);
}
saludar2("Daniel");
// Clases con propiedades y métodos tipados
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, precio: ${this.precio}`);
    }
}
let colors = "rojo";
// Uso de tipos genéricos
function duplicar(valor) {
    return valor;
}
const numeroDuplicado = duplicar(5);
const textoDuplicado = duplicar("Hola");
const persona = {
    nombre: "Luis",
    edad: 25,
    direccion: {
        calle: "San Juan",
        numero: 12
    }
};
const Tortuga = {
    nombre: "Manuelita",
    tipo: "acuatico"
};
const Turpial = {
    nombre: "Turpial",
    tipo: "ave",
    colorPlumaje: "amarillo"
};
