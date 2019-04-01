import { Injectable } from '@angular/core';

@Injectable()
export class UserAbilitiesService {
  public abilitiesInfo = {
    myAbilities: 'The technology of the industry is growing fast than you can imagine, especially for the last decade. I want to upgrade myself all the time, so I could create any software that could helps people.',
    skills: [
      {
        skillName: "Html",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "Css",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "Javascript",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "Angular Framework",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "KnockoutJS Framework",
        proficiency: 4 //"[5 to 0]"
      },
      {
        skillName: "Python",
        proficiency: 4//"[5 to 0]"
      },
      {
        skillName: "Golang",
        proficiency: 4 //"[5 to 0]"
      },
      {
        skillName: "SQL",
        proficiency: 4 //"[5 to 0]"
      },
      {
        skillName: "C++",
        proficiency: 3 //"[5 to 0]"
      },
      {
        skillName: "Data Structure and Algorithm",
        proficiency: 4 //"[5 to 0]"
      }
    ],
    tools: [
      {
        toolName: "Git",
        year: "4 years",
        proficiency: 5 //"[5 to 0]"
      },
      {
        toolName: "Linux Ubuntu/ Mac OS",
        year: "3 years",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: "Jira",
        year: "2 year",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: "Jenkins",
        year: "2 years",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: 'Docker',
        year: "1 year",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: 'Kubernetes',
        year: "1 year",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: 'Apache 2',
        year: "1 year",
        proficiency: 4 //"[5 to 0]"
      }
    ]
  };

  getAbilitiesInfo() {
    return this.abilitiesInfo;
  }

}
