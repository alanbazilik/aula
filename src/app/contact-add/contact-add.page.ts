import { Component, OnInit } from '@angular/core';
import { Contact, StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage implements OnInit {
  model: any = [];
  key: string;
  contacts: any = [];
  constructor(private storageService: StorageService,
  private toast: ToastController
    ) { }

  ngOnInit() {
    this.getAllContacts();
  }
  save(){
 this.storageService.insert(this.model).then(() => {
   console.log("salvo com sucesso");
 }).catch(() => {
   console.log("Erro");
 })
  }
  getAllContacts(){
    this.storageService.getAll().then((res) => {
      console.log(res);
      this.contacts = res;
    })
  }

}
