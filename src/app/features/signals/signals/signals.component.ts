import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsCountComponent } from '../signals-count/signals-count.component';
import { AppModule } from '../../../app.module';
import { SignalsSearchComponent } from '../signals-search/signals-search.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [ CommonModule, SignalsCountComponent, SignalsSearchComponent ],
  template: `
    <h1>Signals Sample</h1>
    <div class="container">
      <div class="card">
        <app-signals-count></app-signals-count>
      </div>
      <div class="card">
        <app-signals-search></app-signals-search>
      </div>
    </div>
  `,
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
