import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormGroup,FormControl, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  public password : string = "";  public ConfirmPass : string = "";  public ans : string = ""

  MarvellousForm = new FormGroup(
    {
      username : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]),
      passowrd : new FormControl(''),
      ConfirmPass : new FormControl('')
    }
  );

  fun() : any
  {
     if(this.password !== this.ConfirmPass)
     this.ans = "Password and Confirmpassword are not same";
  }

  
  // get fname()
  // {
  //   return this.MarvellousForm.controls;
  // }
  get username(): any {
    return this.MarvellousForm.controls;
  }
  
}
