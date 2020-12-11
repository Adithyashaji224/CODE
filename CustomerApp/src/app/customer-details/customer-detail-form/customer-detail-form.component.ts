import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from 'src/app/shared/customer-details.service';

@Component({
  selector: 'app-customer-detail-form',
  templateUrl: './customer-detail-form.component.html',
  styleUrls: ['./customer-detail-form.component.css']
})
export class CustomerDetailFormComponent implements OnInit {


  constructor(public service:CustomerDetailsService) { }

  ngOnInit(): void {
    
  }

 
}
