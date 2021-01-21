import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { match_value } from '../../../../services/_validators/confirmation.validator';
import { UserRegistrationService } from '../../services/user-registration.service';

@Component({
    selector: 'app-confirmsignup',
    templateUrl: './confirm-signup.component.html',
    styleUrls: ['./confirm-signup.component.scss'],
})

export class ConfirmSignupComponent implements OnInit {
    /* Inputs */

    /* Outputs */

    /* Form Declarations */
    userSignUpForm: FormGroup;
    userName = new FormControl(null, [Validators.required]);
    password = new FormControl(null, [Validators.required]);
    confirmPassword = new FormControl(null, [Validators.required, match_value('password')]);

    /* Model Declarations*/

    /* Other Declarations */
    isSubmitting: boolean; //Form submission variable
    closeResult = ''; //close result for modal
    loginCheck: boolean;
    userId: string = '';
    isTokenValid: boolean = false; //Form submission variable

    constructor(public fb: FormBuilder,
        private registrationService: UserRegistrationService,
        private router: Router,
        private toastr: ToastrService,
        private route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.initializeSignUpForm();
        
    }

    

    /*
     * Initialize Login Form
     */
    initializeSignUpForm() {
        this.userSignUpForm = this.fb.group({
            userName: this.userName,
            password: this.password,
            confirmPassword: this.confirmPassword
        });
    }

    onSubmit() {
        const userSignUpForm = this.userSignUpForm.value;
        
    }

}
