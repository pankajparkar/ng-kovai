import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poaf-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  languages = ['Hindi', 'English', 'Marathi'];
  proficiencies = ['Fluent', 'Native'];
  constructor() { }

  ngOnInit(): void {
  }
}
