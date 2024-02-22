import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent {

  constructor() { }

  changeSize(size: string) {
    const stickyNote = document.querySelector('.sticky-note');
    if (size === 'large') {
      (<HTMLElement>stickyNote!).style.transform = 'scale(1.2)';
    } else {
      (<HTMLElement>stickyNote!).style.transform = 'scale(1)';
    }
  }

  changeColor() {
    // Your color change logic here
  }

}
