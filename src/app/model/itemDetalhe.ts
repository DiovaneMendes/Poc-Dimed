import { Categoria } from './categoria';

export class ItemDetalhe{
  precoPor: number;
  ean: number;
  origemDesconto: string;
  precoDe: number;
  nomenclatura: string;
  nomenclaturaDetalhada: string;
  principioAtivo: string;
  classeTerapeutica: string;
  situacaoItem: string;
  advertencias: string[];
  categorias: Categoria[];

  constructor(precoPor?: number, ean?: number, origemDesconto?: string, precoDe?: number, nomenclatura?: string,
              nomenclaturaDetalhada?: string, principioAtivo?: string, classeTerapeutica?: string,
              situacaoItem?: string, advertencias?: string[], categorias?: Categoria[]){
    this.precoPor = precoPor;
    this.ean = ean;
    this.origemDesconto = origemDesconto;
    this.precoDe = precoDe;
    this.nomenclatura = nomenclatura;
    this.nomenclaturaDetalhada = nomenclaturaDetalhada;
    this.principioAtivo = principioAtivo;
    this.classeTerapeutica = classeTerapeutica;
    this.situacaoItem = situacaoItem;
    this.advertencias = advertencias;
    this.categorias = categorias;
  }
}