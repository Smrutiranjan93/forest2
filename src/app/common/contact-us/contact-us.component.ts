import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
// import { ContactusService } from 'src/app/services/contactus.service';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    contactForm: FormGroup;
    submitted: boolean;
   
  
    constructor(private contactService:ServiceService, 
      private formBuilder:FormBuilder ) { }

    ngOnInit(): void {

      this.contactForm = this.formBuilder.group({
        name: ['', [
          // Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(20),
          // Validators.pattern(/^[A-Za-z\s]+$/),
        ]],
        email:['',[

        ]],
        mobile:['', [
          // Validators.required,
          // Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
          ]],
          message:['', [
            // Validators.required,
            ]],
      });
      
    }
    save(){
      this.contactService.saveForm(this.contactForm.value).subscribe((data:any)=>{
        console.log(data.data);
      });
        // console.log(data.data);
    }
     
       
    
    // get f(){  
    //   return this.contactForm.controls;  
    // } 
    
    // send(){
    //     this.submitted = true;
    //     if (this.contactForm.invalid) {
    //         return;
    //     } 
    // }
    // numericOnly(event: { key: string; }) {
    //     let patt = /^([0-9])$/;
    //     let result = patt.test(event.key);
    //     return result;
    // }
}

