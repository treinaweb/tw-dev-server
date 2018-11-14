import { Component, OnInit } from '@angular/core';

import hotkeys from 'hotkeys-js';
import {TwDevServerService} from "../../services/tw-dev-server.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  connectionStatus = false;
  connectionUrl = 'http://localhost:3002';
  endPoint = localStorage.getItem('_endpoint') || '';
  inputCode = '';
  outputCode = '';
  isPlaying = false;
  selectedRequisitionMethod = 'GET';
  requisitionMethods = [
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ];

  constructor(
    private http: HttpClient,
    private devServerService: TwDevServerService
  ) { }

  ngOnInit() {
    hotkeys('ctrl+enter', (event,handler) => {
      switch(handler.key){
        case "ctrl+enter": this.onPlay() ;break;
      }
    });
    this.testConnection();
  }

  onPlay(){
    if(this.connectionStatus){
      this.isPlaying = true;
      console.log(this.inputCode, this.connectionUrl, this.endPoint, this.selectedRequisitionMethod)
      const url = `${this.connectionUrl}/api/${this.endPoint}`;

      this.devServerService.sendCode(url, this.selectedRequisitionMethod, this.inputCode)
        .subscribe(
          response => {
            this.outputCode = JSON.stringify(response, null, 4);
            this.isPlaying = false;
          },
          error => {
            this.isPlaying = false;
          }
        )
    }
  }

  saveEndpoint(){
    localStorage.setItem('_endpoint', this.endPoint);
  }

  testConnection(){
    this.http.get(`${this.connectionUrl}/api/test/test`).subscribe(
      response => {
        this.connectionStatus = true;
      },
      error => {
        this.connectionStatus = false;
      }
    )
  }

}
