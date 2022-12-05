import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoryCheckboxComponent } from './components/category-checkbox/category-checkbox.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartComponent } from './components/cart/cart.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NameNationalizeComponent } from './components/name-nationalize/name-nationalize.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { BeersListWithPaginationComponent } from './components/beers-list-with-pagination/beers-list-with-pagination.component';
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
import { UserLoginComponentModule } from './components/user-login/user-login.component-module';
import { UserServiceModule } from './services/user.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { NewUserServiceModule } from './services/new-user.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { NameNationalizeComponentModule } from './components/name-nationalize/name-nationalize.component-module';
import { NameNationalizeServiceModule } from './services/name-nationalize.service-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { BeersListWithPaginationComponentModule } from './components/beers-list-with-pagination/beers-list-with-pagination.component-module';
import { BeersServiceModule } from './services/beers.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategorySelectComponent },
      { path: 'crypto', component: CryptoChipsListComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent },
      { path: 'checkbox-categories', component: CategoryCheckboxComponent },
      { path: 'categories-menu', component: MenuCategoryComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'register', component: RegisterFormComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cat-fact', component: CatFactsComponent },
      { path: 'age/:name', component: AgePredictionComponent },
      { path: 'cart/:id', component: CartComponent },
      { path: 'user/:id', component: UserDetailsComponent },
      { path: 'nationalize/:name', component: NameNationalizeComponent },
      { path: 'filtered-products', component: FilteredProductListComponent },
      { path: 'sorted-products', component: SortedProductListComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'beers', component: BeersListWithPaginationComponent }
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategorySelectComponentModule,
    CategoryServiceModule,
    CryptoChipsListComponentModule,
    CryptosServiceModule,
    PublicHolidaysComponentModule,
    HolidaysServiceModule,
    CategoryCheckboxComponentModule,
    MenuCategoryComponentModule,
    ProductFormComponentModule,
    UserLoginComponentModule,
    UserServiceModule,
    RegisterFormComponentModule,
    NewUserServiceModule,
    ProductDetailComponentModule,
    CatFactsComponentModule,
    CatFactsServiceModule,
    AgePredictionComponentModule,
    AgePredictionServiceModule,
    CartComponentModule,
    CartServiceModule,
    UserDetailsComponentModule,
    NameNationalizeComponentModule,
    NameNationalizeServiceModule,
    FilteredProductListComponentModule,
    SortedProductListComponentModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    BeersListWithPaginationComponentModule,
    BeersServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
