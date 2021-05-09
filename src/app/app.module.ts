import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './shared/one/one.component';
import { TwoComponent } from './shared/two/two.component';
import { ThreeComponent } from './shared/three/three.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
