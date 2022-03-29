import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //Vamos criar um metodo para receber dados do formulario

  recebedorDados(dadosRecebido: any) {
    alert(`o email recebdido foi ${dadosRecebido.email}`)
  }

  //Criando as props para controlar os formularios

  dataForm: any
  email: any

  //Chamando o hook para priorizar a instancia da classe

  ngOnInit() {
    this.dataForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^@]*@[^@]*')
      ])),
      senha: new FormControl('', this.validacaoSenha)
    })
  }

  //Vmammos criar um metodo de validação da senha

  validacaoSenha(senhaDigitada: any): any {
    if (senhaDigitada.value.length >= 8) {
      return{senha:true}
    } else {
      return null
    }
  }

  //Vamos criar um metodo para exibir o resultado do controle de formuçario pela camada logica
  exibirDados(umDado: any) {
    this.email = umDado.email
  }

}


