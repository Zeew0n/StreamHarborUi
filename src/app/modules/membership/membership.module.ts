import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { MemberSignUpComponent } from './components/membership.component';
import { MembershipRoutingModule } from './membership-routing.module';

@NgModule({
    declarations: [
        MemberSignUpComponent
    ],
    imports: [
        CommonModule,
        MembershipRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule,
        NgSelectModule
    ],
    providers: []
})
export class Membership { }
