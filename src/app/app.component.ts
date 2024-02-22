import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StickyNoteComponent } from './my-components/sticky-note/sticky-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StickyNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Rehab';
}
