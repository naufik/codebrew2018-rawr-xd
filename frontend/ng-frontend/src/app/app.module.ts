import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


/* Import Services */
import { JSONService } from './services/textdb.service';
import { ProfileService } from './services/profile.service';
import { EventService } from './services/event.service';

import { AppComponent } from './components/app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CardComponent } from './card/card.component';

@NgModule({
	declarations: [
		AppComponent,
		UserComponent,
		HeaderComponent,
		SearchComponent,
		SearchResultsComponent,
		CardComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		JSONService,
		ProfileService,
		EventService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
