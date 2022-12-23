import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowproductComponent } from './components/showproduct/showproduct.component';


const routes: Routes = [{path: '/showproduct-component:id',component: ShowproductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
