import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'poaf-typed-forms',
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss']
})
export class TypedFormsComponent implements OnInit {


  languages = ['Hindi', 'English', 'Marathi'];
  proficiencies = ['Fluent', 'Native'];

  // FormControl
  // FormGroup
  // FormArray
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  toggle({checked}) {
    const emailControl = this.profileForm.get('email');
    console.log(emailControl);
    if (checked) {
      // Add validator
      emailControl.setValidators([Validators.required]);
    } else {
      // remove validator
      emailControl.clearValidators();
    }
    emailControl.updateValueAndValidity();
  }

  addLanguage() {
    const languagesFormArray = this.profileForm.get('languages') as FormArray;
    const newLanguage = this.fb.group({
      language: '',
      fluency: ''
    });
    languagesFormArray.push(newLanguage);
  }

  getLanguages() {
    return (this.profileForm.get('languages') as FormArray).controls;
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      email: [''],
      address: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      languages: this.fb.array([])
    });
  }

}
