import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Services */
import { ProfileService } from './services/profile.service';


import { AppComponent } from './components/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
