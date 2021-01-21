import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {
  NgbModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserListModel } from 'src/app/models/user/user-list.model';
import { UserListService } from 'src/app/modules/user-account/services/userList.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
})

export class UsersManagementComponent implements OnInit{
  // Modal Declarations
  closeResult = ''; // close result for modal
  title = [];
  city = [];
  state = [];
  private userList: UserListModel[];

  // Constructor
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private httpClient: HttpClient,
    private userListService: UserListService
  ) {}

  // ngOnInit
  ngOnInit() {
    // this.title = ['Chief Product Officer', 'CTO', 'CEO'];
    // this.city = ['Salt Lake City'];
    // this.state=['UT']
   this.getallusers();

  }

  getallusers() {

    this.userListService.getAllUsers().subscribe(
      (res: Array<UserListModel>) => {
        this.userList = res;
      },
      error => {
        this.toastr.error(error.error.errormessage !== undefined ?
          error.error.errormessage : 'user create failed', 'error!');
      });
  }

  // Modal Open and Dismiss
  open(content) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'modal-harbor',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
