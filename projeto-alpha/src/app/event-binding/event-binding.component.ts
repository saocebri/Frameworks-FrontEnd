import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  exibirAlerta():void{
    console.log('Evento disparado...')
    alert('Evento disparado')
  }
  

}
