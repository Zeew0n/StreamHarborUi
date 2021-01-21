import { Component, Output, EventEmitter, } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TenantCreateModel } from 'src/app/models/user/tenant-create.model';
import { TenantRegistrationService } from '../services/tenantregistration.service';

@Component({
    selector: 'tenant-signup',
    templateUrl: './tenantuserregistration.component.html',
})

export class TenantSignupComponent {
    /* Inputs */

    /* Outputs */

    /* Form Declarations */
    contactForm: FormGroup;
    userName = new FormControl('', [Validators.required]);
    firstName= new FormControl('', [Validators.required]);
    lastName= new FormControl('', [Validators.required]);
    email= new FormControl('', [Validators.required]);
    confirmEmail= new FormControl('', [Validators.required]);
    phoneNumber=new FormControl('', [Validators.required]);
    // password = new FormControl('', [Validators.required]);
    // confirmPassword = new FormControl('', [Validators.required]);

    /* Other Declarations */
    isSubmitting: boolean; //Form submission variable
    closeResult = ''; //close result for modal



    constructor(
        private fb: FormBuilder,
        private tenantRegistrationService: TenantRegistrationService,
        private modalService: NgbModal,
        private toastr: ToastrService) {
    }

    ngOnInit() {
        this.initializeTenantRegistrationForm(); //initialize
    }

    /*
     * Initialize Engagement Form
     */
    initializeTenantRegistrationForm() {
        this.contactForm = new FormGroup({
            userName: this.userName,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            confirmEmail:this.confirmEmail,
            phoneNumber:this.phoneNumber
        });
    }
    
    //onSubmit(form: FormGroup) {
    //}

    onSubmit() {
        const createForm = this.contactForm.value;
          if (this.contactForm.valid) {
            const model = new TenantCreateModel();
            debugger;
            model.userName = createForm.userName;
            model.firstName= createForm.firstName;
            model.lastName= createForm.lastName;
            model.email= createForm.email;
            model.confirmEmail= createForm.confirmEmail;
            model.phoneNumber= createForm.phoneNumber;
            console.log(model);

            this.tenantRegistrationService.signUpTenantUser(model).subscribe(
              (res) => {
                this.toastr.success('Tenant User Created Successfully.', 'Success!');
                this.modalService.dismissAll();
              },
              error => {
                this.toastr.error(error.error.errorMessage !== undefined ?
                  error.error.errorMessage : 'Tenant User Creation Failed!', 'Error!');
              });
    
          }
        
        }


    // checkPasswords(form: FormGroup) {
    //     let pass = form.value.password;
    //     let confirmPass = form.value.confirmPassword;

    //     return pass === confirmPass ? null : { notSame: true }
    // }


    /*
     * Modal Open and Dismiss
     */
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
