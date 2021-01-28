import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { LoginPageComponent } from './modules/user-account/components/login-page/login-page.component';
import { ForgotPasswordComponent } from './modules/user-account/components/forgot-password/forgot-password.component';
import { SignupComponent } from './modules/user-account/components/signup/signup.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { TenantSignupComponent } from './modules/tenantusers/components/tenantuserregistration.component';
import { ResetPasswordComponent } from './modules/user-account/components/reset-password/reset-password.component';
import { ConfirmSignupComponent } from './modules/user-account/components/confirm-signup/confirm-signup.component';
import { AuthGuard } from './services/_guards/auth-guard';
export const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'tenant', component: TenantSignupComponent },
    {
        path: 'updatepassword/:uid/:uname/:token',
        component: ResetPasswordComponent
    },

    {
        path: 'confirm/:uid/:uname/:token',
        component: ConfirmSignupComponent
    },

    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: '', component: HomePageComponent, pathMatch: 'full', canActivate: [AuthGuard] },
            {
                path: 'home',
                loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
                canActivate: [AuthGuard] 
            },
            {
                path: 'users-management',
                loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
                canActivate: [AuthGuard] 
            },
            {
                path: 'user-profile',
                loadChildren: () => import('./modules/profile/profile.module').then(m => m.Profile),
                canActivate: [AuthGuard] 
            },
            {
                path: 'user-list',
                loadChildren: () => import('./modules/internalcompany/internal-company.module').then(m => m.InternalCompanyModule),
                canActivate: [AuthGuard]
            },

            {
                path: 'tenant-management',
                loadChildren: () => import('./modules/tenant/tenant.module').then(m => m.TenantModule),
                canActivate: [AuthGuard]
            },

            {
                path: 'membership',
                loadChildren: () => import('./modules/membership/membership.module').then(m => m.Membership),
                canActivate: [AuthGuard]
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
