import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-greivanceregistration',
  templateUrl: './greivanceregistration.component.html',
  styleUrls: ['./greivanceregistration.component.css']
})
export class GreivanceregistrationComponent implements OnInit {

  greivanceForm: FormGroup;
  submitted: boolean
  selectedFile:any

  constructor(private greivanceservice: ServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.greivanceForm = this.formBuilder.group({
      complaintCategory: ['', []],
      complaint: ['', []],
        startDate: ['', []],
        name: ['', []],
        email: ['', []],
        mobileNo: ['', []],
        houseNo: ['', []],
        street: ['', []],
        area: ['', []],
        complainDescription: ['', []],
        file: ['', []]
        
  })

  // {"complaintCategory":"vsdvvshdjhs","complainDescription":"rghcjhgjh","name":"drunk n drive","deptId":15,"ward":"vhh","street":"mmm","complaint":"djkchj","houseNo":"666","area":"nialli","duration":5,"zone":"dgghh","status":"RECEIVED","roleId":346,"mobileNo":"9938870393","complaintNo":"345","assignedUid":45,"validComplaint":true,"remarks":"chgjhkj","email":"saishona1995@gmail.com","startDate":"2022-09-28","endDate":"2022-09-28"}
}

onFileSelected(event: any){
  console.log(event);
  this.selectedFile=<File>event.target.files[0];
}
grievanceUpload(){
  console.log(this.selectedFile);
  let data=
  {
      'complaintCategory':this.greivanceForm.value.complaintCategory,
      'complaint':this.greivanceForm.value.complaint,
      'startDate':this.greivanceForm.value.startDate,
      'name':this.greivanceForm.value.name,
      'email':this.greivanceForm.value.email,
      'mobileNo':this.greivanceForm.value.mobileNo,
      'houseNo':this.greivanceForm.value.houseNo,
      'street':this.greivanceForm.value.street,
      'area':this.greivanceForm.value.area,
      'complainDescription':this.greivanceForm.value.complainDescription,
      
    }
  console.log("files values are"+this.selectedFile)
  console.log(data)

  // Build formData object.
let formData = new FormData();
formData.append('complaintData', JSON.stringify(data));
formData.append('file',this.selectedFile,this.selectedFile.name);
   
  // this.greivanceservice.greivanceRegister(formData).subscribe((formData) => {
  this.greivanceservice.greivanceRegister(formData).subscribe((complaintData) => {
    console.log(complaintData);
  })
}
}

// userComplaint(complaint: Complaint, selectedFile:any) {
//   var formData : any=new FormData();
//   formData.append('complaintData', JSON.stringify(complaint));

//   if (selectedFile !=null){
//       formData.append('file',selectedFile);
//   }
//   return this.httpClient.post(this.PATH_OF_API + '/complaintRegister', formData, {
//       headers: this.requestHeader,
//   });
  
  
// }


