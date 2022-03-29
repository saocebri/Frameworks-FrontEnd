import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-pai',
  templateUrl: './c-pai.component.html',
  styleUrls: ['./c-pai.component.css']
})
export class CPaiComponent {
  //Criando ttle

  title = 'Angular-Alpha'

  //Criar as property cujos os valores serão enviados para o componente filho

  texto: string = "Este texto que será exibido na janela alerta"
  outroTexto: string = "Texto enviado do componente-pai para o componente-filho"

  //Vamos criar um metodo para receber os dados e vincular na view do pair
  recebendoDados(dadosRecebidos: any) {
    let receptora: string = `${dadosRecebidos.nome}Obrigado por se cadastrar \n`
    receptora = `${receptora} o email ${dadosRecebidos.email} foi cadastrado com sucesso`
    alert(receptora)
  }

}
