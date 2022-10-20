import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent {

  constructor(
    private cardService:CardService
  ) { }


  search(searchText:string):void {
    searchText = searchText.toLowerCase();
     this.cardService.filteredCards= this.cardService.cards.filter((card)=> {
      return card.title.toLowerCase().indexOf(searchText) > -1 ||(card.name && card.name.toLowerCase().indexOf(searchText ) > -1);

    })
  }

}
