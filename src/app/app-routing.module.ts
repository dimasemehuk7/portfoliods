import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page.component";
import {ResumePageComponent} from "./pages/resume/resume-page.component";
import {AboutPageComponent} from "./pages/about/about-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'resume', component: ResumePageComponent},
  {path: 'about', component: AboutPageComponent},
  // {path: 'projects', component: ResumePageComponent},
  // {path: 'blog', component: ResumePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
