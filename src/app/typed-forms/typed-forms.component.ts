import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poaf-typed-forms',
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss']
})
export class TypedFormsComponent implements OnInit {

  languages = ['Hindi', 'English', 'Marathi'];
  proficiencies = ['Fluent', 'Native'];
  constructor() { }

  ngOnInit(): void {
  }
}
