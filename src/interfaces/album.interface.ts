export interface Album {
  secciones: Seccion[];
  totalDeFiguritas: number;
}


export interface Seccion {
    nombre: string;
    codigo: string;
    figuritas: FiguritaI[];
  }


  export interface FiguritaI {
    item: string;
    cantidad: number
  }
  
