import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importando nossos componentes
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import{ TwoWayBindingComponent} from './two-way-binding/two-way-binding.component'



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'propb', component: PropertyBindingComponent },
  { path: 'eventb', component: EventBindingComponent },
  {path: 'two-way', component: TwoWayBindingComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
