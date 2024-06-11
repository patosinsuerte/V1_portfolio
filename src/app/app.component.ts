import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Patricio Abarca - Portfolio';

  constructor(private webTitle: Title) { }


  ngOnInit(): void {
    this.webTitle.setTitle(this.title);
  }
}
