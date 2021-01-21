import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { LoginPageComponent } from './modules/user-account/components/login-page/login-page.component';
import { ForgotPasswordComponent } from './modules/user-account/components/forgot-password/forgot-password.component';
import { SignupComponent } from './modules/user-account/components/signup/signup.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { TenantSignupComponent } from './modules/tenantusers/components/tenantuserregistration.component';
import { UsersManagementComponent } from './modules/users/components/users-management/users-management.component';
import { ResetPasswordComponent } from './modules/user-account/components/reset-password/reset-password.component';
import { ConfirmSignupComponent } from './modules/user-account/components/confirm-signup/confirm-signup.component';

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
        path: 'user',
       component:UsersManagementComponent
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'users-management',
                loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'user-profile',
                loadChildren: () => import('./modules/profile/profile.module').then(m => m.Profile)
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