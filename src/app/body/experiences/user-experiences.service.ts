import { Injectable } from '@angular/core';

@Injectable()
export class UserExperiencesService {
  private experiencesInfo = {
    myExperiences: 'Importants thins in my life: Family, friends, coding and calligraphy',
    educations: [
      {
        schoolName: 'University of Alberta',
        startDate: 'September 2014',
        endDate: 'April 2019',
        degreeTitle: 'Bachelor of Science',
        certificationDescription: 'Specialization of Computer Science',
        location: 'Edmonton, AB'
      },
    ],
    careers: [
      {
        companyName: 'Vendasta Technologies Inc.',
        startDate: 'January 2018',
        endDate: 'January 2019',
        jobTitle: 'Developer Internship',
        jobDuty: ['Developed, maintained, and enhanced a web application in an agile environment.',
                  'Constructed frontend UI interfaces in Knockout and Angular frameworks.',
                  'Developed backend API components and database transactions with Python and Go.',
                  'Deployed projects using Docker and Kubernetes.',
                  'Authored test plans and cases, conduct security and unit tests and debug at source level.',
                  'Worked with clients and customer servicer, analyzed and troubleshoot reported bugs.'
                ],
        location: 'Saskatoon',
        companyLink: 'https://www.vendasta.com/'
      },
      {
        companyName: 'Lenovo Group Ltd.',
        startDate: 'May 2017',
        endDate: 'July 2017',
        jobTitle: 'Developer Internship',
        jobDuty: ['Co-developed a customized Firefox OS called Boot to Gecko(B2G) with C.',
                  'IT support, including hardware and operating system diagnostics.'
                  ],
        location: 'Beijing, China',
        companyLink: ''
      }
    ]
  };

  getExperiencesInfo() {
    return this.experiencesInfo;
  }

}
