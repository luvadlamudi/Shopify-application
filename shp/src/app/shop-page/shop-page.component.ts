import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { StoreItem } from '../interfaces/store-item';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  listOfItems: StoreItem[] = [];

  sortByLowestPrice: boolean = true;

  constructor(private communication: CommunicationService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(): void {
    this.communication?.getAllItems()?.subscribe((items: StoreItem[]) => {
      this.listOfItems = items;
    })
  }

  sortByPrice(): void {
    this.listOfItems.sort((a: StoreItem, b: StoreItem) => this.sortByLowestPrice ? 
    a.price - b.price : b.price - a.price);
    this.sortByLowestPrice = !this.sortByLowestPrice;
  }

}
