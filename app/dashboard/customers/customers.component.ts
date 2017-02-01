import { Component, OnInit } from '@angular/core';

import { IAccount } from '../../search/account.model';
import { SearchService } from '../../search/search.service';

@Component({
  selector: 'customers-info',
  templateUrl: 'app/dashboard/customers/customers.component.html',
  styles: [`
      .results-table tbody {
          display: inline-block;
          max-height:400px;
          overflow-y: scroll;
      }

      .results-table tr {
        width: 100%;
        display: inline-table;
        table-layout: fixed;
      }

      .customer-button-override {
        background-color: #1D70B7;
        color: white;
      }
  `]
})
export class CustomersComponent implements OnInit {
  errorMessage: string;
  searchTerm: string = '';
  foundAccounts: IAccount[] = [];
  isRunningRequest: boolean = false;

  constructor(private searchService: SearchService) {
  }

  onSearch(searchText: string) {
    this.searchService.searchForAccounts(searchText).subscribe(
      items => {
        this.foundAccounts = items;
      }
    );
  }

  onCreateCustomer(customer: any) {
    // handle create csutomer;
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
