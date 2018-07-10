import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  count = 0;
  inter ;

  @Output() intervalFired = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  start() {
      this.inter = setInterval(() => {
        this.intervalFired.emit(this.count + 1 ) ;
         this.count ++;
         }
       , 1000);
}
  end() {
    clearInterval(this.inter);
  }
}
