import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoryCheckboxComponent } from './components/category-checkbox/category-checkbox.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategorySelectComponentModule } from './components/category-select/category-select.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptosServiceModule } from './services/cryptos.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';
import { CategoryCheckboxComponentModule } from './components/category-checkbox/category-checkbox.component-module';
import { MenuCategoryComponentModule } from './components/menu-category/menu-category.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategorySelectComponent }, { path: 'crypto', component: CryptoChipsListComponent }, { path: 'public-holidays', component: PublicHolidaysComponent }, { path: 'checkbox-categories', component: CategoryCheckboxComponent }, { path: 'categories-menu', component: MenuCategoryComponent }, { path: 'create-product', component: ProductFormComponent }]), ProductListComponentModule, ProductsServiceModule, CategorySelectComponentModule, CategoryServiceModule, CryptoChipsListComponentModule, CryptosServiceModule, PublicHolidaysComponentModule, HolidaysServiceModule, CategoryCheckboxComponentModule, MenuCategoryComponentModule, ProductFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
