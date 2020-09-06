import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@ngneat/reactive-forms';

interface Profile {
  fullName: string;
  address: string;
  address2: string;
  email: string;
}

@Component({
  selector: 'poaf-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  languages = ['Hindi', 'English', 'Marathi'];
  proficiencies = ['Fluent', 'Native'];

  profileForm: FormGroup<Profile>;

  // FormControl
  // FormGroup
  // FormArray

  constructor() { }

  buildForm() {
    this.profileForm = new FormGroup<Profile>({
      fullName: new FormControl("Pankaj Parkar", [Validators.required]),
      address: new FormControl(""),
      address2: new FormControl(""),
      email: new FormControl(""),
    })
  }

  markAllFieldsRequired() {
    Object.keys(this.profileForm.controls).forEach(
      c => {
        const control = this.profileForm.get(c);
        control.setValidators([Validators.required]);
        control.updateValueAndValidity();
      }
    )
  }

  ngOnInit(): void {
    this.buildForm();
    const profileFormValue$ = this.profileForm.value$.subscribe(
      v => v.email
    );
  }
}
