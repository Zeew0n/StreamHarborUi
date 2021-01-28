import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TenantComponent } from './components/tenant.component';
import { AuthGuard } from 'src/app/services/_guards/auth-guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: TenantComponent, canActivate: [AuthGuard]}
    ]
  }
];
@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forChild(routes)],
  exports: [RouterModule]

})




export class TenantRoutingModule { }
