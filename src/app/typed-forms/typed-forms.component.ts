import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'poaf-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

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

  markAllRequired() {
    const keys = Object.keys(this.profileForm.controls).forEach(
      control => {
        const currentControl = this.profileForm.get(control);
        currentControl.clearValidators();
        currentControl.setValidators([Validators.required]);
        currentControl.updateValueAndValidity();
      }
    )
  }

  getLanguages() {
    return (this.profileForm.get('languages') as FormArray).controls;
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('', [Validators.required]),
      address2: new FormControl('', [Validators.required]),
      languages: new FormArray([])
    });
  }
}
