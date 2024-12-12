import { Component } from '@angular/core';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  counter = 0;

  project: Project[] = [
    {
      id: this.counter,
      title: `Registration Website`,
      summary: `Built the backend of the ConUHacks IX registration website, the biggest hackathon in Quebec with 3000+ applications.`,
      tags: [
        '../assets/logos/nextjs.svg',
        '../assets/logos/icons8-typescript.svg',
        '../assets/logos/mongodb.svg',
        '../assets/logos/microsoft-azure.svg',
      ],
      projectLink: '#',
      demoLink: 'https://register.conuhacks.io',
      picture: '../assets/images/ConUHacks.png',
    },
    {
      id: ++this.counter,
      title: `Mailing List Website`,
      summary: `Developped the backend of the ConUHacks IX mailing list website. This website was used to send updates to our 550+ subscribers.`,
      tags: [
        '../assets/logos/nextjs.svg',
        '../assets/logos/icons8-typescript.svg',
        '../assets/logos/mongodb.svg',
      ],
      projectLink: '#',
      demoLink: 'https://mailinglist.conuhacks.io',
      picture: '../assets/images/MailingList.png',
    },
    {
      id: ++this.counter,
      title: `Moe.dev`,
      summary: `Responsive personal portfolio website I built for myself using Angular, Bootstrap and Typescript.`,
      tags: [
        '../assets/logos/angular-seeklogo.svg',
        '../assets/logos/icons8-typescript.svg',
        '../assets/logos/bootstrap-5-seeklogo.svg',
      ],
      projectLink: 'https://github.com/Moe1177/my-website',
      demoLink: 'https://moedev-75400.web.app',
      picture: '../assets/images/Moe.dev.png',
    },
    {
      id: ++this.counter,
      title: `Strays Away`,
      summary: `Simple website built using HTML, CSS, Node.js and Express.js. That allows people to put pets for adoption and to adopt pets. (Only compatible on laptop/desktop)`,
      tags: [
        '../assets/logos/HTML5_Badge.svg',
        '../assets/logos/css-3-seeklogo.svg',
        '../assets/logos/javascript-seeklogo.svg',
        '../assets/logos/icons8-node-js.svg',
      ],
      projectLink: 'https://github.com/Moe1177/HostedStraysAway',
      demoLink: 'https://straysaway.onrender.com/',
      picture: '../assets/images/Pets.jpg',
    },
    {
      id: ++this.counter,
      title: `Fluent Fingers`,
      summary: `This project won me and my team 3rd place at McHacks 11. It is a full stack application where we built a Neural Network that translates sign language.
        (Demo Coming Soon)`,
      tags: [
        '../assets/logos/react-seeklogo.svg',
        '../assets/logos/bootstrap-5-seeklogo.svg',
        '../assets/logos/python-seeklogo.svg',
        '../assets/logos/flask-seeklogo.svg',
      ],
      projectLink: 'https://github.com/Hares-2088/fluentfingers-fe',
      demoLink: '#',
      picture: '../assets/images/Screenshot2.png',
    },
    {
      id: ++this.counter,
      title: `Friend's Portfolio Website`,
      summary: `Simple portfolio website I built for my friend to help him post his architectural portfolio. 
        (Demo Coming Soon)`,
      tags: [
        '../assets/logos/HTML5_Badge.svg',
        '../assets/logos/css-3-seeklogo.svg',
        '../assets/logos/javascript-seeklogo.svg',
      ],
      projectLink: 'https://github.com/Moe1177/Friend-Portfolio-Website',
      demoLink: '#',
      picture: '../assets/images/Screenshot1.png',
    },

    {
      id: ++this.counter,
      title: `Face Recognition`,
      summary: `This project was what introduced me to OpenCV and the world of AI. It is a simple program that detects faces.
        (Demo Coming Soon)`,
      tags: [
        '../assets/logos/python-seeklogo.svg',
        '../assets/logos/OpenCV_logo_black.svg',
      ],
      projectLink: 'https://github.com/Moe1177/Face-Detection',
      demoLink: '#',
      picture: '../assets/images/Face-Recognition.jpeg',
    },
  ];
}
