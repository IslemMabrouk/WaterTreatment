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
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EspaceClientComponent } from './components/espace-client/espace-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button' ;
import { MatTabsModule } from '@angular/material/tabs' ;
import { MatSelectModule } from '@angular/material/select' ;
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import{ MatInputModule } from '@angular/material/input';
import{ MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { AdminDashboardRoutingModule } from './admin-dashboard/admin-dashboard-routing.module';
import { NavComponent } from './nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { Home2Component } from './home2/home2.component';
import {MatStepperModule} from '@angular/material/stepper';
// Material Form Controls
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Layout
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AddContratComponent } from './components/add-contrat/add-contrat.component';
import{ MatAutocompleteModule } from '@angular/material/autocomplete';
import{HttpClientModule} from'@angular/common/http';
import { AddMesureComponent } from './components/add-mesure/add-mesure.component';
import { MaterialModule } from './material/material.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { AdoucisseurDetailComponent } from './components/adoucisseur-detail/adoucisseur-detail.component';
import { PurificateurDetailComponent } from './components/purificateur-detail/purificateur-detail.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { ValidationDemandeComponent } from './components/validation-demande/validation-demande.component'
import { EmailContactComponent } from './components/email-contact/email-contact.component'

import { ContratDetailComponent } from './components/contrat-detail/contrat-detail.component';
import { DisplayContratComponent } from './components/display-contrat/display-contrat.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { DemandeTableComponent } from './components/demande-table/demande-table.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { MesuresTableComponent } from './components/mesures-table/mesures-table.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { MiniCard1Component } from './mini-card1/mini-card1.component';
import { MiniCard2Component } from './mini-card2/mini-card2.component';
import { MiniCard3Component } from './mini-card3/mini-card3.component';
import { MiniCard4Component } from './mini-card4/mini-card4.component';
import { ViewGraphComponent } from './view-graph/view-graph.component';
import { SuiviComponent } from './components/suivi/suivi.component';
import { AuthGuard } from './services/authGard';
import { AuthService } from './services/auth.service';
import { RoleGuard } from './services/role.guard';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';



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
    WelcomeComponent,
    ReviewsComponent,
    AddProductComponent,
    EspaceClientComponent,
    CardComponent,
    NavComponent,
    DashComponent,
    Home2Component,
    EntretienComponent,
    AddContratComponent,
    AddMesureComponent,
    AdoucisseurDetailComponent,
    PurificateurDetailComponent,
    DisplayProductComponent,
    ValidationDemandeComponent,
    EmailContactComponent,    
    ContratDetailComponent,
    DisplayContratComponent,
    UsersTableComponent,
    DemandeTableComponent,
    ProductsTableComponent,
    MesuresTableComponent,
    ContactsTableComponent,
    Card2Component,
    Card3Component,
    MiniCard1Component,
    MiniCard2Component,
    MiniCard3Component,
    MiniCard4Component,
    ViewGraphComponent,
    SuiviComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, //Général filProjet kol yjibhom
    ReactiveFormsModule,
   BrowserAnimationsModule,
    MatButtonModule, 
    MatTabsModule,MatSelectModule,MatOptionModule,
    MatFormFieldModule,MatIconModule,
    MatCheckboxModule, MatInputModule,MatCardModule,
    MatAutocompleteModule,
    MaterialModule,MatProgressBarModule,
     MatDividerModule, MatTableModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    AdminDashboardRoutingModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatAutocompleteModule,
    CdkStepperModule,    
    MatAutocompleteModule,
    MaterialModule,MatProgressBarModule, MatDividerModule,
    GoogleChartsModule.forRoot(),
       MatAutocompleteModule,
    MaterialModule,MatProgressBarModule, MatDividerModule,
    MatNativeDateModule,
    SocialLoginModule

  ],
  providers: [AuthGuard,AuthService,RoleGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1039286714726-4ft6vjnvmv2usm2ugl9690rv9gbi18hv.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
