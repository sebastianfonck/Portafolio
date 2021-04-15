import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavIzquierdaComponent } from './componet/nav-izquierda/nav-izquierda.component';
import { HeaderComponent } from './componet/header/header.component';
import { WorkComponent } from './componet/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavIzquierdaComponent,
    HeaderComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
