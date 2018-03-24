import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' 

/* Import Services */
import { JSONService } from './services/textdb.service';
import { ProfileService } from './services/profile.service';
import { EventService } from './services/event.service';

import { AppComponent } from './components/app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  	JSONService,
    ProfileService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
