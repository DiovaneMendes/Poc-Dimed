import { Builder } from 'builder-pattern';
import { Item } from 'src/app/model/item';
import { Categoria } from 'src/app/model/categoria';

export class TelaInicialStub{

  public static getItens(): Item[]{
    return [ Builder<Item>()
              .codigoItem(89423576)
              .estoqueLoja(45)
              .precoPor(4.56)
              .nomenclaturaVarejo('TORSILAX 4 CP AV')
              .ean(7893189840993)
              .origemDesconto('PROMOÇÃO')
              .precoDe(6.99)
              .nomenclatura('TORSILAX')
              .nomenclaturaDetalhada('TORSILAX 4 CP AV')
              .principioAtivo('CARISOPRODOL/DICLOFENACO/PARACETAMOL/CAFEINA')
              .classeTerapeutica('ANALGESICOS+ANTIINFLAMATORIOS')
              .situacaoItem('T')
              .advertencias(['Não use junto com outros medicamentos que contenham paracetamol, com álcool, ou em caso de doença grave do fígado.',
                            'A persistirem os sintomas, o médico deverá ser consultado.'])
              .categorias([new Categoria('Medicamentos', 1), new Categoria('Relaxantes Musculares', 3)])
            .build() ];
  }

  public static getFork(): Item[][]{
    return [this.getItens(), this.getItens()];
  }

  public buscaBases(){ }
  public listaFork(){ }

}