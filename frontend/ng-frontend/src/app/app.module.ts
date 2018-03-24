import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { OrganizationComponent } from './organization/organization.component';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EventComponent,
    OrganizationComponent,
    ProfileWidgetComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
