import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noSpacesValidator } from '../../validators';
@Component({
  selector: 'app-reactiveforms',
  standalone: false,
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css'
})
export class Reactiveforms {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, noSpacesValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      alert('Login Successful!');
    } else {
      this.loginForm.markAllAsTouched(); // Show errors
    }
  }

}
