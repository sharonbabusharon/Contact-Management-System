import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { myContacts } from 'src/model/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
  // contactId:any;
  // contactName:string='';
  contact:myContacts={}

  allGroups:any=[]


  constructor(private api:ApiService,private route:Router) {  }


    ngOnInit(): void{
      this.api.getAllGroups().subscribe((data: any)=>{
        console.log(data);
        this.allGroups=data
        
      })
    }
    //add new contact
    addContact(){
      this.api.addContact(this.contact).subscribe((data:any)=>{
        this.route.navigateByUrl('')

      })
    }
}


