import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: 'Ruoyang (Brandon) Song',
    jobTitle: 'Full Stack developer',
    aboutMe: 'Driven and fast-learning software developer with proven problem-solving and communication skills. I’m seeking a developer position with a fast-growing technology company where I can use my experience in Javascript, Go and Python.',
    profilePicture: 'assets/profile.JPG',
    location: 'Vancourver',
    email: 'ruoyang@ualberta/ca',
    devpostAccount: '',
    facebookAccount: '',
    githubAccount: 'https://github.com/ruoyangsong',
    googleAccount: '',
    linkedinAccount: 'https://www.linkedin.com/in/ruoyangsong/',
    twitterAccount: '',
    otherAccount: ''
  };

  getUserInfo() {
    return this.userInfo;
  }

}
