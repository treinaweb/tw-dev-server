import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code-output',
  templateUrl: './code-output.component.html',
  styleUrls: ['./code-output.component.scss']
})
export class CodeOutputComponent implements OnInit {
  editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    readOnly: true
  };
  @Input() code = '';

  constructor() { }

  ngOnInit() {
  }

}
