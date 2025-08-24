import { Component,Input } from '@angular/core';
import { Student} from '../student.model';
@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails {
@Input() student?: Student;
}
