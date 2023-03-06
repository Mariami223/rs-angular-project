import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private route: Router) {}

  navigate() {
    this.route.navigate(['application']);
    console.log('clicked');
  }
}
