// Interfaces

export interface Persona{
  nombre: string;
  edad: number;
  direccion: Direccion
}

export interface Direccion {
  calle: string,
    numero: number
}


// Solo acepta los colores definidos en Color
export type Color = "rojo" | "verde" | "amarillo"