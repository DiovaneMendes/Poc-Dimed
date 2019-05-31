import { Categoria } from '../../../model/categoria';
import { Item } from './../../../model/item';
import { Builder } from 'builder-pattern';

export class ListaItensStub{
  public static getItem(): Item{
    return Builder<Item>()
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
          .build()
  }

  public open() { }

}