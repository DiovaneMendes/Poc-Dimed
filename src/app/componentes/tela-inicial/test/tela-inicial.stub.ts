import { ItemDetalhe } from 'src/app/model/itemDetalhe';
import { ListaItem } from './../../../model/listaItem';
import { Categoria } from 'src/app/model/categoria';
import { Estoque } from 'src/app/model/estoque';
import { Item } from 'src/app/model/item';
import { Builder } from 'builder-pattern';

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

  public static getItensError(): Item[]{
    return [ Builder<Item>()
              .codigoItem(999999)
              .estoqueLoja(null)
              .precoPor(null)
              .nomenclaturaVarejo(null)
              .ean(null)
              .origemDesconto(null)
              .precoDe(null)
              .nomenclatura(null)
              .nomenclaturaDetalhada(null)
              .principioAtivo(null)
              .classeTerapeutica(null)
              .situacaoItem(null)
              .advertencias(null)
              .categorias(null)
            .build() ];
  }

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
          .build();
  }

  public static getFork(): Item[][]{
    return [this.getItens(), this.getItens()];
  }

  public static getItemIncompleto(): Item{
    return Builder<Item>()
            .codigoItem(89423576)
            .nomenclaturaVarejo('TORSILAX 4 CP AV')
          .build();
  }

  public static getItemDetalhe(): ItemDetalhe{
    return Builder<ItemDetalhe>()
            .precoPor(4.56)
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

  public static getListaItemDetalhes(): any[]{
    return [ 
      Builder<ListaItem>()
        .itens([this.getItemDetalhe(), this.getItemDetalhe()])
      .build(),
      [ Builder<Estoque>()
        .estoqueLoja(45)
      .build() ]
    ];
  }

  public buscaBases(){ }
  public listaFork(){ }

}