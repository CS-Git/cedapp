import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges {

  constructor() { }

@Input() item: string;
@Output() newItemEvent = new EventEmitter<string>();

ngOnChanges(changes: SimpleChanges) {
  // if (changes) {
     // this.updateForm(changes.meet.currentValue);
     console.log(changes);
  // }
 }
  ngOnInit(): void {
    
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
