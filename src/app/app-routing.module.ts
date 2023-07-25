import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { AppComponent } from './app.component';

import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'rrss', component: RrssComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
