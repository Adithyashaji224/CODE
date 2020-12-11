import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../shared/customer-details.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  CustomerList:any[];
  custid:number;
  constructor(public service:CustomerDetailsService) { }

  ngOnInit(): void {
    this.refreshCustomerList();
  }
  
refreshCustomerList()
{
    this.service.getCustomerList().subscribe(data=>
      {
        this.CustomerList=data
      });
}
  
populateForm(cust)
{
  this.CustomerList=Object.assign({},cust)
}


deleteData(cust)
{
  if(confirm('Are you sure ? ')){
    this.service.deleteCustomer(cust.custid).subscribe(data=>{
      alert(data.toString());
      this.refreshCustomerList();
    })
  }
}

} 
