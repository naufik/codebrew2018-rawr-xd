import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** Services */
import { ProfileService } from './services/profile.service';

import { AppComponent } from './components/app.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { OrganizationComponent } from './organization/organization.component';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { FilterComponent } from './filter/filter.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EventComponent,
    OrganizationComponent,
    ProfileWidgetComponent,
    FilterComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
