import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {RepoComponent} from './repo/repo.component';
import { DateCountPipe } from './date-count.pipe';
// import { BolderDirective } from './bolder.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchFormComponent,
    RepoComponent,
    UserProfileComponent,
    DateCountPipe,
    // BolderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
