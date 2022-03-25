import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-input-filho',
  templateUrl: './c-input-filho.component.html',
  styleUrls: ['./c-input-filho.component.css']
})
export class CInputFilhoComponent{

  //elementos para fazer uso do input Property Data Binding
  @Input() mensagem: string=''
  @Input('alert') outraMensagem!: string
  
  exibirMensagemDeAlerta(): void{
    alert(this.outraMensagem)
  }

}
