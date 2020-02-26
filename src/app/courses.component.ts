import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courseList">
        {{ course }}
      </li>
    </ul>
    `
})
export class CoursesComponent {
  title = 'Courses';
  courseList;

  constructor(coursesService: CoursesService) {
    this.courseList = coursesService.getCourses();
  }

}

