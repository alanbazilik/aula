import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(contact: Contact) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.storage.set(key, contact);  }

  public update(key: string, contact: Contact) {
    return this.storage.set(key, contact);
  }

  // private save(key: string, contact: Contact) {
  //   return this.storage.set(key, contact);
  // }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let contacts: ContactList[] = [];

    return this.storage.forEach((value: Contact, key: string, iterationNumber: Number) => {
      let contact = new ContactList();
      contact.key = key;
      contact.contact = value;
      contacts.push(contact);
    })
      .then(() => {
        return Promise.resolve(contacts);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Contact {
  nome: string;
  telefone: number;
  email: string;
  active: boolean;
}

export class ContactList {
  key: string;
  contact: Contact;
}
