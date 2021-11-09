export interface EstructuraCuentaContable {
  Codigo: string;
  Descripcion?: string;
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
}
