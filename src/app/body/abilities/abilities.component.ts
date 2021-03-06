import { Component, OnInit } from '@angular/core';
import {UserAbilitiesService} from "./user-abilities.service";
import {PageService} from "../../page.service";

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css'],
  providers: [UserAbilitiesService]
})
export class AbilitiesComponent implements OnInit {
  public userAbilitiesInfo;
  public pageInfo;

  constructor(public userAbilitiesService: UserAbilitiesService, public pageService: PageService) { }

  ngOnInit() {
    this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
    this.pageInfo = this.pageService.getPageInfo();
    document.getElementById("abilities").style.backgroundColor = this.pageInfo['abilitiesBackgroundColor'];
  }

}
