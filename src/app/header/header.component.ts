import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {PageService} from "../page.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userInfo;
  public pageInfo;

  constructor(public userService: UserService, public pageService: PageService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    this.pageInfo = this.pageService.getPageInfo();
  }

}
