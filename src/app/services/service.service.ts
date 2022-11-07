import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  PATH_OF_API='http://117.211.75.160:8065/api';
  // PATH_OF_API2='http://117.211.75.160:8064/api';
  requestHeader=new HttpHeaders({'No-Auth':'True'});
  constructor(private http:HttpClient) { }


  
  saveForm(data:any): Observable<any>{
    // return this.http.post(`${FormApi}/contactUs`,data);
    return this.http.post<string>(this.PATH_OF_API+ '/contactUs',data,{
      headers:this.requestHeader
    });
    
   }
   
  //  tenderRegister(data:any){
  //   return this.http.post(this.PATH_OF_API2+'/tenderRegister',data);
  //  }
tenderRegister(values: any): Observable<any>{
  console.log('values', values);
  
  // let params=new HttpParams();
  // params=params.append('title',values?.title|| '');
  // params=params.append('issuingAuthority',values?.issuingAuthority || '');
  // params=params.append('endDate',values?.endDate || '');
  // params=params.append('file','file');
  // params=params.append('tenderNumber','tenderNumber');
  // console.log(params);
//  const  payload = {
//   title : values?.title || '',
//   issuingAuthority: values?.issuingAuthority,
//   endDate: values?.endDate || '',
//   file: '',
//   tenderNumber: ''
  

//  }
  return this.http.post(this.PATH_OF_API +'/tenderRegister',values);
}
getTenderList(){
  return this.http.get(this.PATH_OF_API +'/fetchTenderList');
}

greivanceRegister(values: any): Observable<any>{
  console.log('values', values);
//  const  payload = {
//   complaintCategory : values?.complaintCategory || '',
//   complaint: values?.complaint,
//   date: values?.date || '',
//   name: values?.name || '',
//   email: values?.email || '',
//   mobileNo: values?.mobileNo || '',
//   houseNo: values?.houseNo || '',
//   street: values?.street || '',
//   area: values?.area || '',
//   complainDescription: values?.complainDescription || '',
//   file: '',
//  }
  return this.http.post(this.PATH_OF_API +'/complaintRegister',values);
}
}
