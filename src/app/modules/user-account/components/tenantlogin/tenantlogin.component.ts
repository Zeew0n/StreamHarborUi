import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import AuthenticationService from '../../services/authentication.service';
import { UserAuthResponseModel } from '../../../../models/user/user-auth-response.model';
import { Console } from 'console';
import { TenantService } from 'src/app/modules/tenant/services/tenant.service';
import { TenantModel } from 'src/app/models/tenant/tenant.model';

@Component({
    selector: 'app-tenantlogin',
    templateUrl: './tenantlogin.component.html',
})

export class TenantLoginComponent {
    /* Inputs */

    /* Outputs */

    /* Form Declarations */
    tenants: TenantModel[];
    loginForm: FormGroup;
    userName = new FormControl(null, [Validators.required]);
    password = new FormControl(null, [Validators.required]);
    tenantId= new FormControl(true, [Validators.required]);
    /* Model Declarations*/

    /* Other Declarations */
    isSubmitting: boolean; //Form submission variable
    closeResult = ''; //close result for modal
    loginCheck: boolean;


    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private tenantService:TenantService,
        private toastr: ToastrService) {
    }

    ngOnInit() {
        this.initializeLoginForm();
        this.getTenants();
    }

    /*
     * Initialize Login Form
     */
    initializeLoginForm(){
        this.loginForm = new FormGroup({
            userName: this.userName,
            password: this.password,
            tenantId:this.tenantId
        });
    }

    getTenants() {
        this.tenantService.GetAllTenants().subscribe(result => {
            this.tenants = result;
        }, error => console.error);
    }

    changetenant(e) {
        console.log(e.target.value);
      }

    onSubmit() {
        debugger;
       if (this.loginForm.valid) {
        this.authenticationService.logintenant(this.loginForm.value).subscribe(
          (res: UserAuthResponseModel) => {
              localStorage.clear();
              localStorage.setItem('auth_token', res.jwToken);
              localStorage.setItem('role_name', res.roleName)
              localStorage.setItem('refresh_token', res.refreshToken);
              localStorage.setItem('tenant_id', res.tenantId);
              this.toastr.success('Login Successful.', 'Success!');
              console.log(res);
              this.router.navigateByUrl('home');
          },
          error => {
              this.displayLoginErrorMessage(error);
          });
       }
    }

    private displayLoginErrorMessage(error: any) {
        if (error.status === 401) {
          this.toastr.error('Invalid Username or Password.', 'Error!');
        } else if (error.status === 400) {
          this.toastr.error('Something went wrong, please try again later.', 'Error!');
        } else {
          this.toastr.error(error.error.errorMessage !== undefined ? error.error.errorMessage : 'Login failed', 'Error!');
        }
      }

    checkPasswords(form: FormGroup) { // here we have the 'passwords' group
        let pass = form.value.password;
        let confirmPass = form.value.confirmPassword;
        return pass === confirmPass ? null : { notSame: true }
    }
}