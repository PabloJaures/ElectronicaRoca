// src/app/interfaces/producto.interface.ts
export interface Producto {
    ID_Producto: number;
    NOM_Producto: string;
    STOCK_Producto: number;
    PRECIO_Producto: number;
    ID_Descuento: number;
    DESCRIPCION_Producto: string;
    ESTADO_Publicacion: string;
    ID_Categoria: number;
    SKU: number;
    imageUrl?: string; // Propiedad opcional
    quantity?: number; // Propiedad opcional para la cantidad
  }
  