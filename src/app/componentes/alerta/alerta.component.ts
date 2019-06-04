import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})

export class AlertaComponent{
  @Input() mensagem: string = '';

  mostraMensagem(): void{
    setTimeout(() => {
      console.log('PQP');

      this.mensagem = '';
    }, 3000);
  }
}
