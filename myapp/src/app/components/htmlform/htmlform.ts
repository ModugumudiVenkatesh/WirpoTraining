import { Component } from '@angular/core';

@Component({
  selector: 'app-htmlform',
  standalone: false,
  templateUrl: './htmlform.html',
  styleUrl: './htmlform.css'
})
export class Htmlform {
  onSubmit(form: any) {
    console.log('Form submitted:', form);
  }

}