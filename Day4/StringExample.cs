// class StringExample
// {
//     static void Main()
//     {
//         string a = "Venky";//using literal
//         string b = new string("Venky".ToCharArray());//using constructor// its treating a new string object
//         Console.WriteLine("The Value of B is: " + b);
//         Console.WriteLine(a == b);//its checking the value
        
//         // string c = b;
//         Console.WriteLine(a.GetHashCode());
//         Console.WriteLine(b.GetHashCode());
//         Console.WriteLine(object.ReferenceEquals(a, b));

//         string c = string.Intern(b);
//         Console.WriteLine(c.GetHashCode());

//         Console.WriteLine(object.ReferenceEquals(a, c));
//         Console.WriteLine(StringComparer.Ordinal.GetHashCode(a));
//         Console.WriteLine(StringComparer.Ordinal.GetHashCode(c));

//     }
// }