import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/_guards/auth-guard';
import { TenantCompanyPageComponent } from './components/AdminPage/tenantadminpage.component';
import { TenantAdminListComponent } from './components/AdminList/tenantadmin.component';
const routes: Routes = [
    {
      path: '',
      children: [
        {path: '', component: TenantAdminListComponent, canActivate: [AuthGuard]}
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TenantAdminRoutingModule { }
export const internaltenantList = [TenantCompanyPageComponent, TenantAdminListComponent]