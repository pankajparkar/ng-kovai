import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poaf-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  allFieldRequired = false;
  model: any = {};
  languages = ['Hindi', 'English', 'Marathi'];
  proficiencies = ['Fluent', 'Native'];
  constructor() { }

  ngOnInit(): void {
    this.model = {
      fullName: "",
      address: "",
      address2: "",
      email: ""
    }
  }

  submit(t) {

  }
}
