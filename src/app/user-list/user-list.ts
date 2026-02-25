import { Component, ViewChild } from '@angular/core';
import { User } from '../services/user'
import { ReusableModal } from '../reusable-modal/reusable-modal';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, ReactiveFormsModule, ReusableModal],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  constructor(public userService: User) {}

  get users() {
    return this.userService.userList;
  }

  @ViewChild(ReusableModal) modal!: ReusableModal;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  openModal() {
    this.modal.open();
  }

  submit() {
    if (this.form.valid) {
      const { name, email } = this.form.value;
      this.userService.addUser(name!, email!);
      this.form.reset();
      this.modal.close();
    }
  }

  removeUser(id: number) {
    const confirmDelete = confirm('Are you sure you want to remove this user?');
    if (confirmDelete) {
      this.userService.removeUser(id);
    }
  }

}
