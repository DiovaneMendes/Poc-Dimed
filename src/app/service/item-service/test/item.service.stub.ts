import { Categoria } from 'src/app/model/categoria';
import { Estoque } from './../../../model/estoque';
import { Builder } from 'builder-pattern';
import { Item } from 'src/app/model/item';

export class ItemServiceStub{
  public static getDetalhePost(): Object{
    return {
        filial: "101",
        perfil: 1,
        itens: [
          {
            codigo: 0,
            quantidade: 1
          }
        ],
        consultaRegrasFiscais: {
          uf: "RS",
          pais: "BR",
          ufDestino: "RS",
          paisDestino: "BR"
        }
    }
  }

  public static getFork(): any[]{
    return [this.getItem(), this.getEstoque()];
  }

  public static getItem(): Item{
    return Builder<Item>()
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

  public static getEstoque(): Estoque{
    return Builder<Estoque>()
            .codigoItem(840990)
            .estoqueApoio(0)
            .estoqueCd(0)
            .estoqueCdApoio(0)
            .estoqueLoja(29)
            .filial(101)
            .reservaVirtual(0)
          .build();
  }

  public get(){ }

  public post(){ } 
}