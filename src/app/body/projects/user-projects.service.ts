import { Injectable } from '@angular/core';

@Injectable()
export class UserProjectsService {
  public projectsInfo = {
    myProjects: 'The best way to learn a new skill or programming language is to develop a application using that skills set.'
  };

  getProjectsInfo() {
    return this.projectsInfo;
  }

}
