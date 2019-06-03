export class Estoque{
  codigoItem: number;
  estoqueApoio: number;
  estoqueCd: number;
  estoqueCdApoio: number;
  estoqueLoja: number;
  filial: number;
  reservaVirtual: number;

  constructor(codigoItem: number, estoqueApoio: number, estoqueCd: number, estoqueCdApoio: number,
              estoqueLoja: number, filial: number, reservaVirtual: number){ 
      this.codigoItem = codigoItem;
      this.estoqueApoio = estoqueApoio;
      this.estoqueCd = estoqueCd;
      this.estoqueCdApoio = estoqueCdApoio;
      this.estoqueLoja = estoqueLoja;
      this.filial = filial;
      this.reservaVirtual = reservaVirtual;
  }
}