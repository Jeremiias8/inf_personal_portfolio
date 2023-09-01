import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { RrssComponent } from './components/rrss/rrss.component'
import { ExperienceComponent } from './components/experience/experience.component';
import { ErrorComponent } from './components/error/error.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Ang Material */
import { MatSliderModule } from '@angular/material/slider';
import { DialogMaterialComponent } from './components/dialog-material/dialog-material.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalInfoComponent,
    RrssComponent,
    ExperienceComponent,
    ErrorComponent,
    LanguagesComponent,
    DialogMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
