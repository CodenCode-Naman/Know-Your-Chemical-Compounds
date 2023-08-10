import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { HeaderComponent } from './components/header/header.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { CompoundFormComponent } from './pages/compound-form/compound-form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'compounds', pathMatch: 'full' },
  { path: 'compounds', component: HomepageComponent },
  { path: 'compound/add', component: CompoundFormComponent },
  { path: 'compound/:id', component: CardDetailsComponent },
  { path: 'compound/edit/:id', component: CompoundFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CardItemComponent,
    CardDetailsComponent,
    CompoundFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
