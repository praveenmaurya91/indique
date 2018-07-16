import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  errors = errorMessages;
  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required),
  });
  
  /** 
   * onSubmit function call the service to store the data into the firebase
  */
  onSubmit(form) {
    this.contactService.addContact(form.value);
    console.log(form.value)
    this.router.navigate(['']);
  }

}

/**
 * Collection of reusable error messages
 */
export const errorMessages: { [key: string]: string } = {
  name: 'Name is required',
  phone: 'Phone is required',
  email: 'Email must be a valid email address (username@domain)',
  message: 'Message is required',
};