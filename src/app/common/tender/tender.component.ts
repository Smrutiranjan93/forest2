import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {
  tenderForm: FormGroup;
  submitted: boolean

  constructor(private tenderservice: ServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tenderForm = this.formBuilder.group({
      title: ['', []],
        issuingAuthority: ['', []],
        endDate: ['', []],
        file: ['', []]
    })
  //   this.tenderForm = new FormGroup({ 
  //     title: new FormControl(""),
  //     issuingAuthority: new FormControl(""),
  //     endDate: new FormControl(""),
  //     file: new FormControl(""),
  //     tenderNumber: new FormControl("")
  //  }); 
    // this.tenderForm = this.formBuilder.group({
    //   title: ['', []],
    //   issuingAuthority: ['', []],
    //   endDate: ['', []],
    //   file: ['', []]
    // })
  }
  tenderUpload() {
    // debugger
    this.tenderservice.tenderRegister(this.tenderForm.value).subscribe((data:any) => {
      console.log(data);
    })
  }
  // tenderUpload(){
  //   let params=new HttpParams();
  //   params=params.append('title','any');
  //   params=params.append('issuingAuthority','any');
  //   params=params.append('endDate','any');
  //   params=params.append('file','any');
  //   params=params.append('tenderNumber','any');
  //   return this.httpclient.post(this.PATH_OF_API2+'/tenderRegister')
  // }

}
