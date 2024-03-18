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
      title: `Friend's Portfolio Website`,
      summary:
        'Simple portfolio website I built for my friend to help him post his architectural portfolio.',
      tags: [
        '../assets/logos/html5-without-wordmark-color-seeklogo.svg',
        '../assets/logos/css-3-seeklogo.svg',
        '../assets/logos/javascript-seeklogo.svg',
      ],
      projectLink: 'https://github.com/Moe1177/Friend-Portfolio-Website',
      picture: '../assets/images/Screenshot1.png',
    },

    {
      id: ++this.counter,
      title: `Fluent Fingers`,
      summary:
        'This project won me and my team 3rd place at McHacks 11. It is a full stack application where we built a Neural Network that translates sign language.',
      tags: [
        '../assets/logos/react-seeklogo.svg',
        '../assets/logos/bootstrap-5-seeklogo.svg',
        '../assets/logos/python-seeklogo.svg',
        '../assets/logos/flask-seeklogo.svg',
      ],
      projectLink: 'https://github.com/Hares-2088/fluentfingers-fe',
      picture: '../assets/images/Screenshot2.png',
    },

    {
      id: ++this.counter,
      title: `Face Recognition`,
      summary:
        'This project was what introduced me to OpenCV and the world of AI. It is a simple program that detects faces.',
      tags: [
        '../assets/logos/python-seeklogo.svg',
        '../assets/logos/opencv-seeklogo.svg',
      ],
      projectLink: 'https://github.com/Moe1177/Face-Detection',
      picture: '../assets/images/Face-Recognition.jpeg',
    },
  ];
}
