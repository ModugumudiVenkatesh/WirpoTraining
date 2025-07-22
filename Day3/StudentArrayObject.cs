// using System;
// using StudentProgram;
// class StudentArray
// {
//     static void Main()
//     {
//         int studentCount = 3;
//         Student[] students = new Student[studentCount];
//         for (int i = 0; i < studentCount; i++)
//         {
//             students[i] = new Student();
//             Console.WriteLine("Enter name of student");
//             students[i].Name = Console.ReadLine();

//             Console.WriteLine("Enter Age of student");
//             students[i].Age = Convert.ToInt32(Console.ReadLine());

//             Console.WriteLine("How many subjects you want to store");
//             int subjectCount = Convert.ToInt32(Console.ReadLine());

//             students[i].subjectMarks = new int[subjectCount];

//             for (int j = 0; j < subjectCount; j++)
//             {
//                 Console.Write("Enter marks for subjects:");
//                 students[i].subjectMarks[j] = Convert.ToInt32(Console.ReadLine());
//             }
//         }
//         Console.WriteLine("Student obj details are given below : ");

//         foreach (Student s in students)
//         {
//             Console.WriteLine(s.Name);
//             Console.WriteLine(s.Age);
//             foreach (int marks in s.subjectMarks)
//             {
//                 Console.WriteLine("Students Marks are : " + marks);
//             }
//         }
//     }
// }