// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TenantService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpGenericCrudService } from '../../../services/http-generic-crud.service';
import { InternalCompanyModel } from '../../../models/internal-company.model';
import { Observable } from 'rxjs';
import { TenantModel } from 'src/app/models/tenant/tenant.model';


@Injectable({
    providedIn: 'root'
})
export class TenantService extends HttpGenericCrudService<TenantModel>{
    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.API_URL,
            'tenant/',
        );
    }
    protected setHeader() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return httpOptions;
    }


    GetAllTenants(): Observable<TenantModel[]> {
        return this.httpClient.get<TenantModel[]>('tenant/getall');
    }

    updateTenant(data: TenantModel) {
        return this.httpClient.put('tenant/update', data);
      }


      DeletetTenant(id)
      {
          return this.httpClient.delete('tenant/delete/'+id);
      }

    CreateTenant(data)
    {
       
        return this.httpClient.post('tenant/create', data);
    }


}
