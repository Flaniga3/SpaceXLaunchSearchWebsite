import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { AppComponent } from './app.component';
import { LaunchSearchComponent } from './launch-search/launch-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { SpacexLaunchService } from "./Services/spacex-launch.service";
import { SpacexLaunchDetailComponent } from './spacex-launch-detail/spacex-launch-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchSearchComponent,
    SpacexLaunchDetailComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule,
    Angular2FontawesomeModule,
    PaginationModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    SpacexLaunchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
