import { NgModule } from '@angular/core';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from '../nav/nav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';





@NgModule({
 
  imports: [
  
    AdminDashboardRoutingModule,
  
    LayoutModule,
  
    MatToolbarModule,
  
    MatButtonModule,
  
    MatSidenavModule,
  
    MatIconModule,
  
    MatListModule,
    MatSidenavModule,
    MatNavList,
    BrowserAnimationsModule,
    BrowserModule,
    NavComponent,
    MatButtonModule, 
    MatTabsModule,MatSelectModule,MatOptionModule,
    MatFormFieldModule,MatIconModule,
    HttpClientModule,MatCheckboxModule, MatInputModule,MatCardModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    AdminDashboardRoutingModule,
    NavComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    

    
    ],
    exports: [
      AdminDashboardComponent,
     
    ],

     declarations: [AdminDashboardComponent
    
    
    ],
})


export  class AdminDashboardModule { }
