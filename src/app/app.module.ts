import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    // AppComponent,
    // MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserAuthModule
  ],
  providers: [  provideHttpClient(withFetch()) ],
  bootstrap: []
})
export class AppModule { }
