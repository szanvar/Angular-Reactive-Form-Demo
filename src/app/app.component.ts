import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from './validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  userForm: any;

  constructor(private formBuilder: FormBuilder) 
  {

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      profile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]]
    });

    console.log(this.userForm);
  }

  saveUser() 
  {
    if (this.userForm.dirty && this.userForm.valid) 
    {
      alert(`Name: ${this.userForm.value.name}  Email: ${this.userForm.value.email}`);
    }
  }
}
