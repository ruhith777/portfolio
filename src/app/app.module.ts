import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { TalksComponent } from './talks/talks.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesKnownComponent } from './languages-known/languages-known.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    AchievementsComponent,
    EducationComponent,
    ResponsibilitiesComponent,
    TalksComponent,
    ProgrammingLanguagesComponent,
    CertificationsComponent,
    SkillsComponent,
    LanguagesKnownComponent,
    HobbiesComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    ExtracurricularComponent,
    PersonaldetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
