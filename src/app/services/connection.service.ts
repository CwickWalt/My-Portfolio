import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Mail } from '../models/mail.model';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ConnectionService {
    constructor(private http: HttpClient) { }

    private mailArray: Mail[] = [];
    private mailUpdated = new Subject<Mail[]>();

    postMail(name: string, email: string, content: string) {
        const mail: Mail = { name: name, email: email, content: content };
        this.http.post<{ message: string}>('send', mail)
        .subscribe(
            resData => {
                console.log(resData);
            },
            err => {
                console.error('found an error:', err);
            }
        )
    }


}