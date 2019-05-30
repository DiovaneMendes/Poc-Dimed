import { EventEmitter } from '@angular/core';

export class InputEntradaStub{

  public static getEvent(): EventEmitter<string>{
    return new EventEmitter<string>();
  }

  public static getDescricao(): string{
    return 'tors';
  }
}