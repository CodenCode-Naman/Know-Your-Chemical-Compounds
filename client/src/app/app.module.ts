import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { HeaderComponent } from './components/header/header.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CompoundFormComponent } from './pages/compound-form/compound-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    HeaderComponent,
    CardDetailsComponent,
    HomepageComponent,
    CompoundFormComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
