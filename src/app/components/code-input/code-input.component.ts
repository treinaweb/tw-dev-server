import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent implements OnInit {
  editorOptions = {
    theme: 'vs-dark',
    language: 'json'
  };
  @Input() code = '\n\n\n\n';
  @Output() codeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCodeChange(){
    this.codeChange.emit(this.code);
  }
}
