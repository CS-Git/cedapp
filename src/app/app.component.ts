import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cedapp';
  currentItem = 'Bonjour child';
  items = ["item1", "item2", "item3", "item4"];
  
  addItem(value: string) {
    this.items.push(value);
  }
  newValueCurrentItem(value: string) {
    this.currentItem = 'toto';
  }
}
