import { Component } from '@angular/core';
import { Student } from '../student.model';
@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {
students: Student[] = [
    { id: 1, name: 'John Doe', course: 'Angular' },
    { id: 2, name: 'Jane Smith', course: 'React' },
    { id: 3, name: 'Sam Wilson', course: 'Vue' }
  ];

  selectedStudent?: Student;
  newStudent: Student = { id: 0, name: '', course: '' };
  editMode = false;

  onSelect(student: Student) {
    this.selectedStudent = student;
    this.editMode = false;
  }

  addStudent() {
    if (!this.newStudent.name || !this.newStudent.course) return;
    this.newStudent.id = this.students.length
      ? Math.max(...this.students.map(s => s.id)) + 1
      : 1;
    this.students.push({ ...this.newStudent });
    this.newStudent = { id: 0, name: '', course: '' };
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
    if (this.selectedStudent?.id === id) {
      this.selectedStudent = undefined;
    }
  }

  startEdit(student: Student) {
    this.editMode = true;
    this.newStudent = { ...student };
  }

  updateStudent() {
    const index = this.students.findIndex(s => s.id === this.newStudent.id);
    if (index > -1) {
      this.students[index] = { ...this.newStudent };
      this.editMode = false;
      this.newStudent = { id: 0, name: '', course: '' };
    }
  }
}
