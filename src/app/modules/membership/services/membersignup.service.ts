// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';
// import { HttpGenericCrudService } from "../../../services/http-generic-crud.service";
// import { AdminSignUpModel } from '../../../models/user/admin-signup.model';
// import { AppUserModel } from '../../../models/app-user.model';


// @Injectable({
//     providedIn: 'root'
// })
// export class MemberSignUpService{
//     constructor(private httpClient: HttpClient) {
      
//     }

//     signUpAdmin(data: AdminSignUpModel) {
//         return this.httpClient.post('user/signup', data);
//     }

// }


import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpGenericCrudService } from '../../../services/http-generic-crud.service';
import { InternalCompanyModel } from '../../../models/internal-company.model';
import { Observable } from 'rxjs';
import { AdminSignUpModel } from 'src/app/models/user/admin-signup.model';


@Injectable({
    providedIn: 'root'
})
export class MemberSignUpService extends HttpGenericCrudService<AdminSignUpModel>{

    constructor(httpClient: HttpClient) {
         super(
            httpClient,
             environment.API_URL,
             'User/',
         );
    }
    // protected setHeader() {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
                
    //         })
    //     };
    //     return httpOptions;
    // }

    signUpAdmin(data: AdminSignUpModel) {
        return this.httpClient.post('user/signup', data);
    }


}
