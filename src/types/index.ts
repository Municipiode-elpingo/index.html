export type PageId =
  | 'inicio'
  | 'municipio'
  | 'hcd'
  | 'hcd-ordenanzas'
  | 'hcd-actas'
  | 'tramites'
  | 'noticias'
  | 'contacto';

export interface NavItem {
  id: PageId;
  label: string;
  children?: { id: PageId; label: string }[];
}

export interface Ordenanza {
  numero: string;
  titulo: string;
  fecha: string;
  descripcion: string;
}

export interface Acta {
  numero: string;
  tipo: 'Acta' | 'Resolución';
  fecha: string;
  descripcion: string;
}

export interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
  categoria: string;
}

export interface Tramite {
  titulo: string;
  descripcion: string;
  icono: string;
  pasos: string[];
}
