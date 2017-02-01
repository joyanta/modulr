import { Component,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: 'app/search/search.component.html',
  styles: [`
      .search-override {width: 276px;}
      .button-colour-override {
        background-color: #1D70B7;
        color: white;
      }
  `]
})
export class SearchComponent  {
  searchTerm: string = '';
  @Output() onSearch = new EventEmitter<string>();

  searchForAccounts(text: string) {
      this.onSearch.emit(text);
  }
}
