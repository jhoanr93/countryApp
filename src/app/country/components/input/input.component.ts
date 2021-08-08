import { Component, EventEmitter ,Input,OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  term: string ='';

  search(){
    this.onEnter.emit (this.term);
  }

  press( event: any){
    this.debouncer.next (this.term);
  }

  constructor() { }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(250)).subscribe( value => {
      this.onDebounce.emit( value );
    });
  }

}
