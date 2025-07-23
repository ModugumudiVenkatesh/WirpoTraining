// using System;
// namespace StructExample

// {
//     public struct Book
//     {
//         public string Title;
//         public string Author;
//         public decimal Price;
//         public int year;

//     }
//     enum DaysOfWeek
//     {
//         Monday,Tuesday,Wednesday
//     }
//     enum Status
//     {
//         Pending,
//         Approved,
//         Rejected
//     }
//     class BookStructure
//     {

//         static void Main(string[] args)
//         {
//             DaysOfWeek t1 = DaysOfWeek.Tuesday;
//             Console.WriteLine("Structure Example");
//             Book mybook = new Book();
//             mybook.Title = "CSharp";
//             mybook.Author = "ABC";
//             mybook.Price = 4545.00M;
//             mybook.year = 1990;

//             Console.WriteLine(mybook.Title + mybook.Author + mybook.Price + mybook.year);

//             if (t1 == DaysOfWeek.Monday || t1 == DaysOfWeek.Tuesday)
//             {
//                 Console.WriteLine("Either it is monday or tuesday");
//             }
//             else
//             {
//                 Console.WriteLine("Either it is monday or tuesday");
//             }
//             switch (t1)
//             {
//                 case DaysOfWeek.Monday:
//                     Console.WriteLine("It's Monday");
//                     break;
//                 case DaysOfWeek.Tuesday:
//                     Console.WriteLine("It's Tuesday");
//                     break;
//                 case DaysOfWeek.Wednesday:
//                     Console.WriteLine("It's Wednesday");
//                     break;
//                 default:
//                     Console.WriteLine("It's Weekend");
//                     break;

//                     // Status s = Status.Pending;
//                     // string statusstring = s.ToString();


//             }
//             foreach (Status st in Enum.GetValues(typeof(Status)))
//                     {
//                         Console.WriteLine(st);
//                     }
//         }
//     }
//  }