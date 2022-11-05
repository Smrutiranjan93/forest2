// import { HttpParams } from '@angular/common/http'; 
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
  selectedFile:any


  constructor(private tenderservice: ServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tenderForm = this.formBuilder.group({
      title: ['', []],
        issuingAuthority: ['', []],
        endDate: ['', []],
        file: ['', []]
    })
 
  }
  
               onFileSelected(event: any){
                  console.log(event);
                  this.selectedFile=<File>event.target.files[0];
                }
        
                  

  tenderUpload() {
    let data=
      {
          'title':this.tenderForm.value.title,
          'issuingAuthority':this.tenderForm.value.issuingAuthority,
          'endDate':this.tenderForm.value.endDate,
        }
      
  
      // Build formData object.
let formData = new FormData();
 formData.append('tenderData', JSON.stringify(data));
 formData.append('file',this.selectedFile,this.selectedFile.name);
    
    // debugger
    this.tenderservice.tenderRegister(formData).subscribe((tenderData) => {
      console.log(tenderData);
      console.log(this.tenderForm.value);
    })
  }


}
