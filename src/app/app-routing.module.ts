import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';

const routes: Routes = [{path: 'viewproduct-component/:productname',component: ViewproductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
