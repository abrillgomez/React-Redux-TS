/**
 * Nombre de usuario
 * @type {string}
 */
let userName = "Abril";

/**
 * Edad del usuario
 * @type {number}
 */
let userAge = 21;

/**
 * Lista de edades de usuario
 * @type {Array<Number>}
 */
const usersAge = [23, 24, 30, 45, 51];

/**
 * Lista de valores
 * @type {Array<Number | String | Boolean>}
 */
const mixedArray = [42, "Hola", true];

/**
 * Usuario
 * @type {{id: number, name: string, age: number, isActive: boolean}}
 */
const user = {
  id: 1,
  name: "Abril",
  age: 21,
  isActive: true,
};

/**
 * @typedef {object} User
 * @property {number} id este es el id del usuario
 * @property {string} name este es el nombre del usuario
 * @property {number} age esta es la edad del usuario
 * @property {boolean} isActive si el usuario está activo
 */
const user2 = {
  id: 1,
  name: "Abril",
  age: 21,
  isActive: true,
};

/**
 * @type {User}
 */
const user3 = {
  id: 1,
  name: "Abril",
  age: 21,
  isActive: true,
};

/**
 * Imprime por consola un saludo con el nombre del user
 * @param {User} user
 * @returns {void}
 * @example
 * sayHello(user)
 */
function sayHello(user) {
  console.log(`Hola ${user.name}`);
}

/**
 * @function
 * @param {number[]} numbers - El array de números a filtrar
 * @returns {number} - Un nuevo array con los números pares
 */
function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

/**
 * @async
 * @function
 * @param {string} url - La url del servidor remoto
 * @returns {Promise<object>} - Los datos obtenidos del servidor
 * @throws {Error} - Si la solicitud al servidor falla
 */
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Falló al obtener los datos del servidor");
  }
  return response.json();
}
