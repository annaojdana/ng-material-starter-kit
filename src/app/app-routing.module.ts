import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategorySelectComponentModule } from './components/category-select/category-select.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptosServiceModule } from './services/cryptos.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategorySelectComponent },
      { path: 'crypto', component: CryptoChipsListComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent }]), ProductListComponentModule, ProductsServiceModule, CategorySelectComponentModule, CategoryServiceModule, CryptoChipsListComponentModule, CryptosServiceModule, PublicHolidaysComponentModule, HolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
