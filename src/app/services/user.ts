import { Injectable, signal, computed } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class User {

  private users = signal<IUser[]>([]);

  readonly userList = this.users.asReadonly();

  addUser(name: string, email: string) {
    const newUser: IUser = {
      id: Date.now(),
      name,
      email
    };

    this.users.update(users => [...users, newUser]);
  }

  removeUser(userId: number) {
    this.users.update(users =>
      users.filter(user => user.id !== userId)
    );
  }

  totalUsers = computed(() => this.users().length);
  
}
