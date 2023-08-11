import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {NgOptimizedImage} from "@angular/common";
import { ContainerComponent } from './components/container/container.component';
import {HomePageComponent} from "./pages/home/home-page.component";
import {ResumePageComponent} from "./pages/resume/resume-page.component";
import {HttpClientModule} from "@angular/common/http";
import {HometopComponent} from "./components/hometop/hometop.component";
import {ContactmebtnComponent} from "./components/contactme-btn/contactmebtn.component";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {ResumepdfComponent} from "./components/resume-pdf/resumepdf.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {HomemidelComponent} from "./components/home-midle/homemidel.component";
import {SkillscardComponent} from "./components/skills-card/skillscard.component";
import {FooterComponent} from "./components/footer/footer.component";
import {AboutPageComponent} from "./pages/about/about-page.component";
import { AboutopComponent } from './components/aboutop/aboutop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    HomePageComponent,
    ResumePageComponent,
    HometopComponent,
    ContactmebtnComponent,
    ResumepdfComponent,
    LoaderComponent,
    HomemidelComponent,
    SkillscardComponent,
    FooterComponent,
    AboutPageComponent,
    AboutopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
