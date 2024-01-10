import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { TalksComponent } from './talks/talks.component';

const routes: Routes = [
  { path: 'talks', component: TalksComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'responsibilities', component: ResponsibilitiesComponent },
  { path: 'Hobbies', component: HobbiesComponent },
  { path: 'extracurricuar', component:ExtracurricularComponent},
  {path : 'personaldetails',component:PersonaldetailsComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
