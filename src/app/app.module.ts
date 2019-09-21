import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WarningComponent } from './components/warning/warning.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { LastOnlinePipe } from './pipes/last-online.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ViewComponent } from './components/view/view.component';
import { RemoveUnderscorePipe } from './pipes/remove-underscore.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WarningComponent,
    LastOnlinePipe,
    ViewComponent,
    RemoveUnderscorePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
