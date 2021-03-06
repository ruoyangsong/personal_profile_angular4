import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { ProfileComponent } from './body/profile/profile.component';
import { ExperiencesComponent } from './body/experiences/experiences.component';
import { AbilitiesComponent } from './body/abilities/abilities.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { ContactComponent } from './body/contact/contact.component';
import { AboutMeComponent } from './body/profile/about-me/about-me.component';
import { ProfilePictureComponent } from './body/profile/profile-picture/profile-picture.component';
import { DetailsComponent } from './body/profile/details/details.component';
import { EducationsComponent } from './body/experiences/educations/educations.component';
import { CareersComponent } from './body/experiences/careers/careers.component';
import { SkillsComponent } from './body/abilities/skills/skills.component';
import { ToolsComponent } from './body/abilities/tools/tools.component';
import { ProjestListComponent } from './body/projects/projest-list/projest-list.component';
import { SocialAccountsComponent } from './body/contact/social-accounts/social-accounts.component';
import {UserService} from "./user.service";
import {PageService} from "./page.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    ProfileComponent,
    ExperiencesComponent,
    AbilitiesComponent,
    ProjectsComponent,
    ContactComponent,
    AboutMeComponent,
    ProfilePictureComponent,
    DetailsComponent,
    EducationsComponent,
    CareersComponent,
    SkillsComponent,
    ToolsComponent,
    ProjestListComponent,
    SocialAccountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
