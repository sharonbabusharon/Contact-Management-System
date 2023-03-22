import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myContacts } from 'src/model/myContacts';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:3000/Contact"

//function to get all contacts using API

getAllContacts():Observable<myContacts>{

  return this.http.get(this.baseUrl)
}
//api call for fetching particualr contact details
viewContact(contactId:any){
  return this.http.get(`${this.baseUrl}/${contactId}`)
}
//api call for group name
getGroupName(groupId:any){
  return this.http.get("http://localhost:3000/group/"+groupId)
}

getAllGroups(){
  return this.http.get("http://localhost:3000/group")
}

// function for adding nhew contact to server

addContact(contactBody:any){
  return this.http.post(this.baseUrl,contactBody)

}

//function to delete contact from server
deleteContact(contactId:any){
  return this.http.delete(`${this.baseUrl}/${contactId}`)
}

//function to update existing contact
updateContact(contactId:any,contactBody:any){
  return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
}
}
