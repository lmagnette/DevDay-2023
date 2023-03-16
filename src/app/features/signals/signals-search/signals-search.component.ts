import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component( {
  selector: 'app-signals-search',
  standalone: true,
  template: `
    <h2>Signal Search</h2>
    <hr/>
    <p>Searched value: {{search()}}</p>
    <label for="searchInput">Search :</label>
    <input id="searchInput" type="text" (input)="setSearchString($event)"/>
    <ul>
      <li *ngFor="let user of filteredUsers()">{{user.name}}</li>
    </ul>
    <button (click)="addUser()">Add User</button>
  `,
  imports: [
    NgForOf
  ]
})
export class SignalsSearchComponent implements OnInit {

  readonly storageKey = 'lastSearch';

  search = signal(localStorage.getItem(this.storageKey) || '');
  users = signal([
    { id:1, name: 'Harry' },
    { id:2, name: 'Ronald' },
    { id:3, name: 'Hermione' },
  ]);

  filteredUsers = computed( () => this.users().filter((user) => user.name.includes(this.search())))

  setSearchString(event:Event){
    this.search.set((event.target as HTMLInputElement).value);
  }

  addUser(){
    this.users.mutate((users) => users.push({ id:4, name: 'Albus' }));
  }

  ngOnInit() {
    effect(() => {
      localStorage.setItem(this.storageKey, this.search());
    });
  }

}
