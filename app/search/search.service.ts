import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IAccount } from './index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {

  private accountsUrl = 'app/api/accounts/results.json';
  private searchingSource = new Subject<boolean>();

  searching$ = this.searchingSource.asObservable();

  constructor(private http: Http) {
  }

  searchForAccounts(searchTerm: string): Observable<IAccount[]> {

    this.searchingSource.next(true);

    return this.http.get(this.accountsUrl).map((response: Response) => {
      let results = <IAccount[]>response.json().content;
      let matchingAccounts: IAccount[] = [];
      if (searchTerm !== '') {
        matchingAccounts = results.filter(
          account =>
            account.id.toLocaleLowerCase() === searchTerm.toLocaleLowerCase()
            || account.name.toLocaleLowerCase() === searchTerm.toLocaleLowerCase()
        );
      } else {
        matchingAccounts = results;
      }
      return matchingAccounts;
    }).do(data => this.searchingSource.next(false)).catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.statusText || 'Server error');
  }
}
