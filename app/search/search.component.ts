import { Component, OnInit } from '@angular/core';
import { IAccount } from './account.model';
import { SearchService } from './search.service';

@Component({
  selector: 'search',
  templateUrl: 'app/search/search.component.html',
  styles: [`
      .search-override {width: 276px;}
  `]
})
export class SearchComponent implements OnInit {
  errorMessage: string;
  searchTerm: string = '';
  foundAccounts: IAccount[] = [];
  isRunningRequest: boolean = false;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.searching$.subscribe(
      value => {
        this.isRunningRequest = value;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }

  searchForAccounts(text) {
    this.searchService.searchForAccounts(text).subscribe(
      items => {
        this.foundAccounts = items;
      }
    );
  }
}
