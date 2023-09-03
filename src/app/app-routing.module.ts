import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { AppComponent } from './app.component';

import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ErrorComponent } from './components/error/error.component';
import { DialogMaterialComponent } from './components/dialog-material/dialog-material.component';

/* Tutorials components */
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';


const routes: Routes = [
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'rrss', component: RrssComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'dialogmat', component: DialogMaterialComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
