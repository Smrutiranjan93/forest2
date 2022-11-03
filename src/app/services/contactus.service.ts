import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// const FormApi=`${environment.API_HOST}/api`;
@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  PATH_OF_API='http://117.211.75.160:8064/api'

  constructor(private http:HttpClient) {

   }
   saveForm(data:any){
    // return this.http.post(`${FormApi}/contactUs`,data);
    return this.http.post(this.PATH_OF_API+ '/contactUs',data);
   }

}

















