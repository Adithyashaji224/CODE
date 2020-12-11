import { Component, OnInit,Input } from '@angular/core';
import { CustomerDetailsService } from 'src/app/shared/customer-details.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

 

  constructor(private service:CustomerDetailsService) { }

  @Input() custo:any;
  custid:Number;
  name:string;
  city:string;
  district:string;
  pincode:Number;
  emailid:string;
  mobile:string;
  username:string;
  password:string;

  ngOnInit(): void {

    this.custid=this.custo.custid;
    this.name=this.custo.name;
    this.city=this.custo.city;
    this.district=this.custo.district;
    this.pincode=this.custo.pincode;
    this.emailid=this.custo.emailid;
    this.mobile=this.custo.mobile;
    this.username=this.custo.username;
    this.password=this.custo.password;
  }


  addCustomer()
  {
    var val={
            custid:0,
            name:this.name,
            city:this.city,
            district:this.district,
            pincode:this.pincode,
            emailid:this.emailid,
            mobile:this.mobile,
            username:this.username,
            password:this.password
          };
          console.log(val);
          this.service.addCustomer(val).subscribe(res=>{
            alert(res.toString());
          });
  }


  updateCustomer()
  {
    var val={custid:this.custid,
      name:this.name,
      city:this.city,
      district:this.district,
      pincode:this.pincode,
      emailid:this.emailid,
      mobile:this.mobile,
      username:this.username,
      password:this.password
    };
    this.service.updateCustomer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
