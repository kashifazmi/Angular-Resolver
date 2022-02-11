import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsResolverService } from './services/products-resolver.service';

const routes: Routes = [
  {
    path: '',   redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductComponent,
    resolve: { products: ProductsResolverService }
  },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
