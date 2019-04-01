import { Component, OnInit } from '@angular/core';
import {UserExperiencesService} from "../user-experiences.service";

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  public userCareersInfo;

  constructor(public userExperiencesService: UserExperiencesService) { }

  ngOnInit() {
    this.userCareersInfo = this.userExperiencesService.getExperiencesInfo().careers;
  }

}
