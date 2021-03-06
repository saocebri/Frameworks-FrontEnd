import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importando o módulo Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Importando nossos components

import { InterpolationComponent } from './interpolation/interpolation.component';
import { HomeComponent } from './home/home.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CInputFilhoComponent } from './c-input-filho/c-input-filho.component';
import { CPaiComponent } from './c-pai/c-pai.component';
import { OutputComponent } from './output/output.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { AlterarTextoDirective } from './alterar-texto.directive';
import { PipeComponent } from './pipe/pipe.component';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt-PT';
import { registerLocaleData } from '@angular/common';
import {RaizQuadrada} from './pipe-personalizado/pipe-raiz-quadrada';
import { FormularioComponent } from './formulario/formulario.component'

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    HomeComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CInputFilhoComponent,
    CPaiComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    AlterarTextoDirective,
    PipeComponent,
    RaizQuadrada,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'Pt'
  },{
    provide: DEFAULT_CURRENCY_CODE,
    useValue:'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
