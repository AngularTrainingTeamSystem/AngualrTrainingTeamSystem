import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kontakt } from '../models/kontakt';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
 

  constructor(private router: Router) {}


  onContactClick(contactId: string) {
  this.router.navigate(['/edit', contactId]);
}


  @Output() sendData = new EventEmitter(); 


  @Input('kontakt')
  kontakt!:Kontakt

  input!:string;

  ngOnInit(): void {
    
  }

  
  shtoShenim(){
    alert("Name : " + this.kontakt.name + "\n" + "Id : " + this.kontakt.contactId + "\n" + "MobileNumber : " +  this.kontakt.mobilenumber 
    + "\n" + "Date Of Birth : "  + this.kontakt.contactDateCreated 
    + "\n" + "Username : "  + this.kontakt.username  + "\n" + "Email : "  + this.kontakt.email );
  }




}

