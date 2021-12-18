import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
    {path : 'admin', component : NavComponent},


    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
