import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShowproductComponent } from './components/showproduct/showproduct.component';


const routes: Routes = [{path: '/showproduct-component:id',component: ShowproductComponent},

{path:'/addproduct-component:id',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
