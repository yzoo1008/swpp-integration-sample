import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MethodService } from './method.service';
import { CookieXSRFStrategy, HttpModule, XSRFStrategy } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    {
      provide: XSRFStrategy,
      useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
    },
    MethodService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
