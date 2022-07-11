import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../services/url-api";
import {AuthService} from "../services/auth.service";
import {Command} from "../../models/command";
import {DatePipe} from "@angular/common";
import {Data} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private httpClient: AuthService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    // Date du jour
    const currentDate = new Date();
    // Date du début
    const minDate = new Date(new Date().setMonth(2));
    // Méthode pour récupérer les informations de l'API
    this.httpClient.getRequest<Data>(
      UrlApi.commandRecurrence,
      this.datePipe.transform(minDate, 'yyyy-MM-dd')!,
      this.datePipe.transform(currentDate, 'yyyy-MM-dd')!
    ).subscribe((json) => {
      console.log(json);
    },
      error => {
      if (error instanceof HttpErrorResponse) {
        console.log(error.message)
      }
    }
    );
  }

  updateDatas(urlEventClickSidebar: string): void {
    // this.httpClient.getRequest(urlEventClickSidebar).subscribe((json) => {
    //   console.log(json);
    // });
  }

}
