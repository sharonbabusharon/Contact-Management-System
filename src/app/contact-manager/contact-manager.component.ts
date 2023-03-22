import { Component, OnInit } from '@angular/core';
import { myContacts } from 'src/model/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit{

  //display date
  logindate:any;
  searchKey:string=""

  // heading="contactDetails"
//string interpolation
  allContacts:myContacts[]=[]

constructor(private api:ApiService){
  this.logindate=new Date()
}
  ngOnInit(): void {
  this.getAllContacts()

  }
  getAllContacts(){
    this.api.getAllContacts().subscribe((data:any)=>{
      console.log(data);
      this.allContacts=data
    })
  }
    
  //   nameChange(){
  //     alert ("name Changed")
    
  // }
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    console.log(this.searchKey);
    
    
  }
  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((data:any)=>{
      alert("contact deleted")
      this.getAllContacts()
    })
  }
}

