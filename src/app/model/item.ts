import { Categoria } from './categoria';

export class Item{
  codigoItem: number;
  estoqueLoja: number;
  precoPor: number;
  nomenclaturaVarejo: string;
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

  constructor(codigoItem?: number, estoqueLoja?: number, precoPor?: number, nomenclaturaVarejo?: string, ean?: number,
              origemDesconto?: string, precoDe?: number, nomenclatura?: string, nomenclaturaDetalhada?: string,
              principioAtivo?: string, classeTerapeutica?: string, situacaoItem?: string, advertencias?: string[],
              categorias?: Categoria[]){
    this.codigoItem = codigoItem;
    this.estoqueLoja = estoqueLoja;
    this.precoPor = precoPor;
    this.nomenclaturaVarejo = nomenclaturaVarejo;
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