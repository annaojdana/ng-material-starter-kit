import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoryCheckboxComponent } from './components/category-checkbox/category-checkbox.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
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
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { UserLoginComponentModule } from './components/user-login/user-login.component-module';
import { UserServiceModule } from './services/user.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { NewUserServiceModule } from './services/new-user.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategorySelectComponent },
      { path: 'crypto', component: CryptoChipsListComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent },
      { path: 'checkbox-categories', component: CategoryCheckboxComponent },
      { path: 'categories-menu', component: MenuCategoryComponent },
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'register', component: RegisterFormComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cat-fact', component: CatFactsComponent }
    ]), ProductListComponentModule, ProductsServiceModule, CategorySelectComponentModule, CategoryServiceModule, CryptoChipsListComponentModule, CryptosServiceModule, PublicHolidaysComponentModule, HolidaysServiceModule, CategoryCheckboxComponentModule, MenuCategoryComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeesServiceModule, UserLoginComponentModule, UserServiceModule, RegisterFormComponentModule, NewUserServiceModule, ProductDetailComponentModule, CatFactsComponentModule, CatFactsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
