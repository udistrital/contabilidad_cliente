export interface EstructuraCuentaContable {
  Id: string;
  Codigo: string;
  Nombre?: string;
  ValorInicial: number;
  Hijos?: EstructuraCuentaContable[];
  Movimientos?: string[];
  Padre?: string;
  UnidadEjecutora: number;
  Estado?: string;
  IsLeaf: boolean;
  expanded?: boolean;
  isHighlighted?: boolean;
  data?: EstructuraCuentaContable;
  children?: EstructuraCuentaContable[];
  NaturalezaCuentaID: string;
}
