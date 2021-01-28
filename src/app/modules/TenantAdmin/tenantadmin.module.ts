import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { internaltenantList, TenantAdminRoutingModule } from './tenantadmin.routing.module';
import { internalComList } from '../internalcompany/internal-company-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TenantAdminRoutingModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        ToastrModule,
    ],
    declarations: [ internaltenantList],
    providers: []
})
export class TenantAdminModule { }
