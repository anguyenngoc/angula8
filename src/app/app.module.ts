import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFooterComponent } from './components/admin-component/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './components/admin-component/admin-header/admin-header.component';
import { AdminNavbarComponent } from './components/admin-component/admin-navbar/admin-navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/admin-pages/home/home.component';
import { AdminSidebarComponent } from './components/admin-component/admin-sidebar/admin-sidebar.component';


// form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// material
import { MaterialModule } from './material';
// service
import { ApiService } from './service/api.service';
import { ConfigUrlService } from './service/config-url.service';
import { AdminComponent } from './pages/admin-pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminNavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminSidebarComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // form
    FormsModule,
    ReactiveFormsModule,
    // material
    MaterialModule
  ],
  providers: [
    ApiService,
    ConfigUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
