export class Categoria{
  descricao: string;
  nivel: number;

  constructor(descricao?: string, nivel?: number){
    this.descricao = descricao;
    this.nivel = nivel;
  }
}