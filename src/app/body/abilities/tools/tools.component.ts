import { Component, OnInit } from '@angular/core';
import {UserAbilitiesService} from "../user-abilities.service";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  public userAbilitiesInfo;
  public arraylength;
  public toolsList1 = [];
  public toolsList2 = [];

  constructor(public userAbilitiesService: UserAbilitiesService) { }

  ngOnInit() {
    this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
    this.arraylength = this.userAbilitiesInfo['tools'].length;
    this.toolsList1 = this.userAbilitiesInfo['tools'].slice(0,this.arraylength/2);
    if(this.arraylength > 0)
      this.toolsList2 = this.userAbilitiesInfo['tools'].slice(this.arraylength/2,this.arraylength);
  }

}
