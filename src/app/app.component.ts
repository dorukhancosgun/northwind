import { Component } from '@angular/core';

//Component, html datasini yonettigimiz yerdir.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Northwind';
  user: string = "Dorukhan Cosgun";
  
}
