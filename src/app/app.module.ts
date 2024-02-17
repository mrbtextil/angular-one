import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './couter/counter.component';
import { HeroModule } from './heroes/hero.module';
import { DbzModule } from './heroes/dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
      CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    DbzModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
