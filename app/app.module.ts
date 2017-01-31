import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import {
  HeaderComponent,
  FooterComponent
} from './common-ui/index';
import { NavBarComponent } from './nav/navbar.component';
import { DashboardComponent } from './dashboard/index';
import { SearchService, SearchComponent } from './search/index';

import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { SortCodePipe } from './shared/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProgressBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    SearchComponent,
    DashboardComponent,
    SortCodePipe
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
