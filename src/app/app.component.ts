import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class.is-transitioning') isTransitioning = true;
  boxes = [];
  readonly transitionLength = 300;

  ngOnInit() {
    this.boxes = Array.from({length: 60}).map(() => ({order: this.getRandomBoxOrder()}));

    setTimeout(() => {
      this.isTransitioning = false;
    }, this.transitionLength);
  }

  getRandomBoxOrder(): number {
    return this.randomNumFromLimit(this.boxes.length);
  }

  onButtonClick(): void {
    this.boxes.forEach(box => {
      box.order = this.getRandomBoxOrder();
    });

    this.isTransitioning = true;
    setTimeout(() => {
      this.isTransitioning = false;
    }, this.transitionLength);
  }

  randomNumFromLimit(limit): number {
    return Math.floor(Math.random() * limit) + 1;
  }
}
