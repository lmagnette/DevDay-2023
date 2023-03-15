import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit {

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
