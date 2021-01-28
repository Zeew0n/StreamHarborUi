

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { TenantComponent } from './components/tenant.component';
import { TenantRoutingModule } from './tenant-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TenantRoutingModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        ToastrModule,
    ],
    declarations: [TenantComponent],
    providers: []
})
export class TenantModule { }
