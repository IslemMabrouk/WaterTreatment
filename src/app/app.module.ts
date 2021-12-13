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
import { EspaceClientComponent } from './components/espace-client/espace-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button' ;
import { MatTabsModule } from '@angular/material/tabs' ;
import { MatSelectModule } from '@angular/material/select' ;
import { HttpClientModule } from '@angular/common/http';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import{ MatInputModule } from '@angular/material/input';
import{ MatCardModule } from '@angular/material/card';



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
    EspaceClientComponent,



   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  //Général filProjet kol yjibhom
    ReactiveFormsModule,
     BrowserAnimationsModule,
    MatButtonModule, 
    MatTabsModule,MatSelectModule,MatOptionModule,
    MatFormFieldModule,MatIconModule,
    HttpClientModule,MatCheckboxModule, MatInputModule,MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
