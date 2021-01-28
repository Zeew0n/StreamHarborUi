import { Component, Output, EventEmitter, } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { InternalCompanyModel } from '../../../../models/internal-company.model';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-tenant-company-page',
    templateUrl: './tenantadminpage.component.html',
})

export class TenantCompanyPageComponent {
}

