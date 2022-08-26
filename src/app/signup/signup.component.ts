import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  /** myForm: FormGroup; */ 


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    /**
     *  this.myForm = this.fb.group({
      username: ['Sammy', Validators.required],
      password: ['', [Validators.required, Validators.minLength(15)]],
      
    });
     */
   
  }

  /** 
   * onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('username', form.value.username);
    console.log('password', form.value.password);
    \
  }
  */
  

}
