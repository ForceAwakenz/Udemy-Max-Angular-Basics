import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign2',
  templateUrl: './assign2.component.html',
  styleUrls: ['./assign2.component.css']
})
export class Assign2Component implements OnInit {
  allowed = false;
  trackedClicks = [];
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.allowed = this.allowed ? false : true;
    this.trackedClicks.push(++this.counter);
  }

  setBackground() {
    if (this.trackedClicks.length > 5) { 
      return 'blue';
    } else {
      return '';
    }

  } 

}
