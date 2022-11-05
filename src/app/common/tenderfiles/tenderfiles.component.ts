import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tenderfiles',
  templateUrl: './tenderfiles.component.html',
  styleUrls: ['./tenderfiles.component.css']
})
export class TenderfilesComponent implements OnInit {
  allTenderList: any;

  constructor(private tenderfile: ServiceService,) { }

  ngOnInit(): void {
    // debugger
    this.tenderfile.getTenderList().subscribe((data:any) => {
      this.allTenderList=data;
      console.log(this.allTenderList);
    })
  }

  
}
