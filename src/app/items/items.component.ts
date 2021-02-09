import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../itemsfornow';
import {Item} from '../itemsinterface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemlist = ITEMS;
  selectedItem: Item;
  constructor() { }

  ngOnInit(): void {
  }
  onSelectedItem(item: Item):void{
    this.selectedItem = item;
    
  }

}
