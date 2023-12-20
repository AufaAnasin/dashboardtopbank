import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { AddModule } from './add/add.module';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AvatarModule
  ],
  providers: [HttpClient],
})
export class DashboardModule { }