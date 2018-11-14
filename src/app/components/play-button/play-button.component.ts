import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit {
  @Input() isPlaying = false;


  constructor() { }

  ngOnInit() {
  }

}
