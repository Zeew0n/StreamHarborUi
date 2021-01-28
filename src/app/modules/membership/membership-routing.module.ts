import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/_guards/auth-guard';
import { MemberSignUpComponent } from './components/membership.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {path: '', component: MemberSignUpComponent,canActivate: [AuthGuard]}
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MembershipRoutingModule { }