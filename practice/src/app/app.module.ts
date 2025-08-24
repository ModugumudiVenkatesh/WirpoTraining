import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module'; // ✅ import StudentModule

@NgModule({
  declarations: [
    AppComponent
    // ❌ Remove StudentList here
  ],
  imports: [
    BrowserModule,
    StudentModule // ✅ This brings in StudentList and StudentDetails
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
