import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { FormaPerdoruesComponent } from './pages/forma-perdorues/forma-perdorues.component';
import { BodyHolderComponent } from './pages/body-holder/body-holder.component';
import { EditPerdoruesComponent } from './pages/edit-perdorues/edit-perdorues.component';

const routes: Routes = [
  
  //path per te paraqitur formen
  {path:'', component: BodyHolderComponent},
  {path:'body',component:BodyComponent},
  {path:'forma', component: FormaPerdoruesComponent},
  {path:'edit/:contactId',component:EditPerdoruesComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
