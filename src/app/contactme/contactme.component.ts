import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Observable, Subject, of, from} from 'rxjs';

import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {}

  submitForm( form: NgForm ) {
    if(form.invalid) {
      return;
    }
    console.log(form.value);
    //call function from contact service
    this.connectionService.postMail(form.value.name, form.value.email, form.value.textarea);
    form.resetForm();
  }

}
