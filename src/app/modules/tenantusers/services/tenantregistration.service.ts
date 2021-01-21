import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpGenericCrudService } from "../../../services/http-generic-crud.service";
import { TenantCreateModel } from 'src/app/models/user/tenant-create.model';


@Injectable({
    providedIn: 'root'
})
export class TenantRegistrationService{
    constructor(private httpClient: HttpClient) {
      
    }

    signUpTenantUser(data: TenantCreateModel) {
        return this.httpClient.post('user/create', data);
    }

}
