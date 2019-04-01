import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  public userInfo;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
  }

}
