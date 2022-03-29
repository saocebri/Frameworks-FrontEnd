import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  //Vamos implemtar as props Pipe

  title: string = 'Bem Vindo ao curso'
  numFloat: number = 678.94
  dataHoje: Date = new Date()
  numDecimal: number = 4893547.9563
  objLiteral = {
    name: 'Carlos',
    address: {
      street: "Rua Governador Carvalho Pinto",
      number: '330'
    }

  }

  mesesAno: Array<string> = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  numPorcentual: number = 0.35

  r1: number =25
  r2: number=150
  r3: number=1548
}
