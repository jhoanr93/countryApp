import { Component, EventEmitter ,OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  term: string ='';

  search(){
    this.onEnter.emit (this.term);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
