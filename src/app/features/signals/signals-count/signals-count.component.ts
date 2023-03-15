import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals-count',
  standalone: true,
  imports: [CommonModule],
  template:`
    <h2>Counter</h2>
    <hr/>
    <p>Count {{count()}}</p>
    <p>Double Count {{doubleCount()}}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
    <ul>
      <li *ngFor="let value of history()">{{value}}</li>
    </ul>
  `,
})
export class SignalsCountComponent implements OnInit {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  history = signal<number[]>([])


  increment() {
    this.count.update(( value) => ++value);
  }

  reset() {
    this.count.set(0);
  }

  ngOnInit(): void {
    effect(() => {
      this.history.mutate((value) => value.push(this.count()));
    } );
  }
}
