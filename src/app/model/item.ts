
export class Item {
  codigoItem: number;
  nomenclaturaVarejo: string;
  nomeDetalhado: string;
  possuiItemAVencer: boolean;
  participaPbm: boolean;
  participaNovoPack: boolean;
  permiteAdesao: boolean;
  possuiKitAdesao: boolean;
  exclusivoPanvel: boolean;
  participaListaReferencial: boolean;
  participaFarmaciaPopular: boolean;

  constructor(codigoItem: number, nomenclaturaVarejo: string, nomeDetalhado: string, possuiItemAVencer: boolean,
      participaPbm: boolean, participaNovoPack: boolean, permiteAdesao: boolean, possuiKitAdesao: boolean,
      exclusivoPanvel: boolean, participaListaReferencial: boolean, participaFarmaciaPopular: boolean){
        this.codigoItem = codigoItem;
        this.nomenclaturaVarejo = nomenclaturaVarejo;
        this.nomeDetalhado = nomeDetalhado;
        this.possuiItemAVencer = possuiItemAVencer;
        this.participaPbm = participaPbm;
        this.participaNovoPack = participaNovoPack;
        this.permiteAdesao = permiteAdesao;
        this.possuiKitAdesao = possuiKitAdesao;
        this.exclusivoPanvel = exclusivoPanvel;
        this.participaListaReferencial = participaListaReferencial;
        this.participaFarmaciaPopular = participaFarmaciaPopular;
  }
}
