import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StickyNoteComponent } from './my-components/sticky-note/sticky-note.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from "./Components/Order/product-list/product-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        StickyNoteComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        HomeComponent,
        ProductListComponent
    ]
})
export class AppComponent {
  title = 'Rehab';
}
