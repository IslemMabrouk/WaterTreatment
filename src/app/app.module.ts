import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdoucisseursComponent } from './components/adoucisseurs/adoucisseurs.component';
import { PurificateursComponent } from './components/purificateurs/purificateurs.component';
import { EntretienComponent } from './components/entretien/entretien.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    AboutUsComponent,
    AdoucisseursComponent,
    PurificateursComponent,
    EntretienComponent,
    ContactComponent,
    RegistrationComponent,
    FooterComponent,
    AddAdminComponent,
    DashboardAdminComponent,
    WelcomeComponent,
    ReviewsComponent,
    AddProductComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  //Général filProjet kol yjibhom
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
