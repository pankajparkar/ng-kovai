import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poaf-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  languages = ['Hindi', 'English', 'Marathi'];
  proficiencies = ['Fluent', 'Native'];
  constructor() { }

  ngOnInit(): void {
  }

}
