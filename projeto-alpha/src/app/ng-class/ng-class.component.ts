import { Component, } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  // vamos cria a nossa primeira propriredade para vincuar com a ngClassComponent

  cssAlteradorViavar: string = 'color size'
  objCSS: PropsCss = new PropsCss();

}

class PropsCss {
  color: boolean = true
  size: boolean = true

}
