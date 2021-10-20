import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign1',
  templateUrl: './assign1.component.html',
  styleUrls: ['./assign1.component.css']
})
export class Assign1Component implements OnInit {
  userName = 'unknwn usr';
  isEmpty: boolean;
  constructor() { }

  ngOnInit(): void {
    // this.isEmpty = !Boolean(this.userName);
  }

  // onTextChange(e: Event) {
  //   this.isEmpty = !Boolean((<HTMLInputElement>e.target).value);
  // }

  onClearBtnClick() {
    this.userName = "";
    // this.isEmpty = true;
  }

}
