import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [UserList],
  template: `<app-user-list></app-user-list>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('user-state-management');
}
