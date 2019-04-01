import { Component, OnInit } from '@angular/core';
import {UserExperiencesService} from "../user-experiences.service";

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  public userEducationsInfo;

  constructor(public userExperiencesService: UserExperiencesService) { }

  ngOnInit() {
    this.userEducationsInfo = this.userExperiencesService.getExperiencesInfo().educations;
  }

}
