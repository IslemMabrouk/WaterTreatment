import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddMesureComponent } from './components/add-mesure/add-mesure.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdoucisseursComponent } from './components/adoucisseurs/adoucisseurs.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { EntretienComponent } from './components/entretien/entretien.component';
import { EspaceClientComponent } from './components/espace-client/espace-client.component';
import { HomeComponent } from './components/home/home.component';
import { PurificateursComponent } from './components/purificateurs/purificateurs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ValidationDemandeComponent } from './components/validation-demande/validation-demande.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'registration' , component: RegistrationComponent},
  {path: 'addAdmin' , component: AddAdminComponent},
  {path: 'addProduct' , component: AddProductComponent },
  {path: 'dashboardAdmin' , component: DashboardAdminComponent},
  {path: 'adoucisseurs' , component: AdoucisseursComponent},
  {path: 'purificateurs' , component: PurificateursComponent},
  {path: 'aboutUs' , component: AboutUsComponent},
  {path: 'entretien' , component: EntretienComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'espaceClient' , component: EspaceClientComponent},
  {path: 'addMesure' , component: AddMesureComponent},

  //Path Dynamique
  {path: 'displayProduct/:id' , component: DisplayProductComponent},
  { path: 'validation/achat/:id' , component: ValidationDemandeComponent},
  { path: 'validation/devis/:id' , component: ValidationDemandeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
