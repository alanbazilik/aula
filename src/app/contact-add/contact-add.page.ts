import { Component, OnInit } from '@angular/core';
import { Contact } from '../services/storage.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage implements OnInit {
  model: any = [];
  key: string;
  constructor() { }

  ngOnInit() {
  }
  save(){

  }

}
