import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

/* Tutorials components */
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialModelComponent } from './models/tutorial.model/tutorial.model';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalInfoComponent,
    RrssComponent,
    ExperienceComponent,
    ErrorComponent,
    LanguagesComponent,
    DialogMaterialComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
