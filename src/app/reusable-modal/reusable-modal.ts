import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reusable-modal',
  imports: [CommonModule],
  templateUrl: './reusable-modal.html',
  styleUrl: './reusable-modal.css',
})
export class ReusableModal {

  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  
}
