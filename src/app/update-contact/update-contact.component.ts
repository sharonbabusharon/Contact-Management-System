import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { myContacts } from 'src/model/myContacts';
import { ApiService } from '../services/api.service';
import { myGroups } from 'src/model/myGroups';


@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId:string=''
  contactDetails:myContacts={};
  groupDetails:myGroups[]=[]

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}

  ngOnInit():void{
        this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.Id);
      this.contactId=data.Id;

      //call an api to get particular contact details
      this.api.viewContact(this.contactId).subscribe((data)=>{
        console.log(data);//p;articulat contact details
        this.contactDetails=data
       
       // to get all group details 
        this.api.getAllGroups().subscribe((data: any)=>{
          console.log(data);
          this.groupDetails=data
          
        })
        
        
      })
  })
}
//to update existeing contact
updateContact(){
this.api.updateContact(this.contactId,this.contactDetails).subscribe((data:any)=>{
 this.route.navigateByUrl('')
  
})
}

}
