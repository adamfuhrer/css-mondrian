import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  boxes = [];

  ngOnInit() {
    this.boxes = Array.from({length: 60}).map(() => ({order: this.getRandomBoxOrder()}));
  }

  getRandomBoxOrder(): number {
    return this.randomNumFromLimit(this.boxes.length);
  }

  onButtonClick(): void {
    this.boxes.forEach(box => {
      box.order = this.getRandomBoxOrder();
    });
  }

  randomNumFromLimit(limit): number {
    return Math.floor(Math.random() * limit) + 1;
  }
}
