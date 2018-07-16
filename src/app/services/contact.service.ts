import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;
  contactDoc: AngularFirestoreDocument<Contact>;


  constructor(public afs: AngularFirestore) {
     this.contactCollection = afs.collection<Contact>('contact');
    this.contacts = this.contactCollection.valueChanges();
   }

  /**
 * function to add data into the collection
 * @param contact 
 */
  addContact(contact: Contact) {
    this.contactCollection.add(contact);
  }
}
