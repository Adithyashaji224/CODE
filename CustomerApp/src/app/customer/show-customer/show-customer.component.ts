import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from 'src/app/shared/customer-details.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {
  CustomerList:any=[];
  ModalTitle:string;
  ActivateAddEdit:boolean=false;
  custo:any;
  constructor(private service:CustomerDetailsService) { }

  ngOnInit(): void {
    this.refreshCustomerList();
  }

  refreshCustomerList()
  {
      this.service.getCustomerList().subscribe(data=>
        {
          this.CustomerList=data;
        });
  }

  addClick()
  {
    this.custo={
      custid:0,
      name:"",
      city:"",
      district:"",
      pincode:"",
      emailid:"",
      mobile:"",
      username:"",
      password:""

    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEdit=true;
  }

  closeClick()
  {
    this.ActivateAddEdit=false;
    this.refreshCustomerList();
  }

  editClick(item)
  {
    this.custo=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEdit=true;
  }
  deleteData(item)
  {
    if(confirm('Are you sure ??')){
       this.service.deleteCustomer(item.custid).subscribe(data=>{
       alert(data.toString());
        this.refreshCustomerList();
        });
    }
  }

}
