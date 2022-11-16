import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategorySelectComponentModule } from './components/category-select/category-select.component-module';
import { CategoryServiceModule } from './services/category.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategorySelectComponent }]), ProductListComponentModule, ProductsServiceModule, CategorySelectComponentModule, CategoryServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
