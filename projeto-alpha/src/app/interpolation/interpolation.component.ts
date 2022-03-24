import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  //Criando as propriedades para a data binding interpolation

  public clientesSelecionados: string[] = ['Carlos', 'Eduardo', 'Brito']
  public x: number = 10
  public umArray: Array<number> = [10, 25, 32, 49, 34]
  public dataHoje: Date = new Date()
  public statusBool: boolean = true

  public exibirTexto(): string{

    return 'Texto retornando a partir'
  }

}
