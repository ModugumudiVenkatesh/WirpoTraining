import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentList } from './student-list/student-list';
import { StudentDetails } from './student-details/student-details';
import { FormsModule } from '@angular/forms'; // ✅ import this


@NgModule({
  declarations: [StudentList, StudentDetails],
  imports: [CommonModule, FormsModule],
  exports: [StudentList, StudentDetails] // ✅ make them available outside
})
export class StudentModule {}
