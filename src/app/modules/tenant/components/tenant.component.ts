
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import AuthenticationService from '../../user-account/services/authentication.service';
import { TenantModel } from 'src/app/models/tenant/tenant.model';
import { TenantService } from '../services/tenant.service';


@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html'
})
export class TenantComponent {
  tenant: TenantModel = new TenantModel();
  tenants: TenantModel[];
  isSubmitting: boolean; // Form submission variable
  closeResult = ''; // close result for modal
  submitted = false;
  tenantId: string = '';
  isEdit: boolean = true;
  isUpdate= false;
  selectTenant;
  


  constructor(
      private fb: FormBuilder,
      private  modalService: NgbModal,
      private toastr: ToastrService,
      private tenantService: TenantService,
      private authService: AuthenticationService,
      private route: ActivatedRoute) {
       }
      /* Form Declarations */
      UserForm: FormGroup;
      EventValue: any = 'Save';
      //isActive: boolean;
      //updatedDate: Date;
      //createdDate: Date;
      organizationName = new FormControl('', [Validators.required]);
      organizationEmail = new FormControl('', [Validators.required]);
      subDomain = new FormControl('', [Validators.required]);

    ngOnInit()
   {
      this.getIC();
      this.initializeTenantForm();
  }

  
  get f() { return this.UserForm.controls; }

  getIC() {
      this.tenantService.GetAllTenants().subscribe(result => {
          this.tenants = result;
      }, error => console.error);
  }
  
  initializeTenantForm() {
      this.UserForm = new FormGroup({

        organizationName : this.organizationName,
        organizationEmail : this.organizationEmail,
        subDomain : this.subDomain,

      });
  }


  EditData(content, tenant: any)
  {
    this.isUpdate = true;
    this.isEdit=true;
    this.selectTenant = tenant;
    debugger;
    console.log(tenant);
      //this.resetFrom();
      this.EventValue ='Update';
      this.UserForm.patchValue({
        
        organizationName : tenant.organizationName,
        organizationEmail : tenant.organizationEmail,
        subDomain : tenant.subDomain,

      });
      this.modalService.open(content,{size:'md',backdrop:'static'});
 }  

  

  open(content) {
   this.resetFrom();
   this.isEdit = false;
   this.tenantId = '';
   this.tenant == null;
   this.openModal(content);
  }

  onSubmit() {
  debugger;

  const createForm = this.UserForm.value;

      if (this.tenantId === '') {

        if (this.UserForm.valid)
        {
              const model = new TenantModel();
              debugger;
              model.organizationName= createForm.organizationName;
              model.organizationEmail= createForm.organizationEmail;
              model.subDomain= createForm.subDomain;


              this.tenantService.CreateTenant(model).subscribe(
              (res) => {
                  this.submitted = true;
                  this.toastr.success('Tenant Added Successfully.', 'Success!');
                  this.modalService.dismissAll();
                  this.getIC();
              },
              error => {
                  console.log(error);
                  this.isSubmitting = false;
                  this.modalService.dismissAll();
                  this.toastr.error(error.error.errorMessage, 'Error!');
               });
          }
      }
      else
      {
        if (this.UserForm.valid)
            {
              const model = new TenantModel();
              debugger;
                  model.organizationName= createForm.organizationName;
                  model.organizationEmail= createForm;
                  model.subDomain= createForm.subDomain;
                   model.id = this.tenantId;
                   this.tenantService.updateTenant(model).subscribe(
                    (res) => {
                      this.toastr.success('Tenant Updated Successfully.', 'Success!');
                      this.modalService.dismissAll();
                      this.getIC();

                    },
                    error => {
                      this.toastr.error(error.error.errorMessage !== undefined ?
                        error.error.errorMessage : 'User Update failed', 'Error!');
                    });

                console.log(model)
                 
             }

  }
     

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
resetFrom()
{
    this.UserForm.reset();
    this.EventValue = 'Save';
    this.submitted = false;
    this.tenant == null;
}



private openModal(content: any) {
 this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'modal-gosend modal-right' }).result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
}
// private displayFormData(data: TenantModel) {
// this.UserForm.patchValue({

//   organizationName : data.organizationName,
//   organizationEmail : data.organizationEmail,
//   subDomain : data.subDomain,

// });
// }


}
