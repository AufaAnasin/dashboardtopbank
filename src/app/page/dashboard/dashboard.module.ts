import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { AddModule } from './add/add.module';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  providers: [HttpClient]
})
export class DashboardModule { }