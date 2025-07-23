// using System;
// class StringProgram
// {
//     static void Main()
//     {
//         string text = "CSharp $Language @is invented _in_ 1990";
//         int len = text.Length;
//         Console.WriteLine("The Length of a String :" + len);

//         string substring = text.Substring(7, 8);
//         Console.WriteLine("The text from a String :" + substring);
//         Console.WriteLine(text.IndexOf("Sharp"));
//         Console.WriteLine(text.ToLower());
//         Console.WriteLine(text.ToUpper());

//         string newString = text.Replace("CSharp", "Java");
//         Console.WriteLine(newString);

//         String replaced = text.Replace(" ", "");
//         Console.WriteLine("Without space: " + replaced.Length);

//         String[] data = text.Split(" ");
//         foreach (string val in data)
//         {
//             Console.WriteLine(val);
//         }


//         int pos = text.IndexOf("Language");
//         string newText = text.Substring(pos + 8);
//         Console.WriteLine("New text Value" + newText);
//         //count of totalspaces
//         int totalspaces = text.Length - text.Replace(" ", "").Length;
//         Console.WriteLine("The total spaces in the sentences: " + totalspaces);
//         //count of specialcharacters
//         int specialCharCount = 0;
//         foreach (char c in text)
//         {
//             if (!char.IsLetterOrDigit(c) && !char.IsWhiteSpace(c))
//                 specialCharCount++;
//         }
//         Console.WriteLine("Total number of special characters: " + specialCharCount);

//         //count of totalwords in a sentence
//         String[] data1 = text.Split(" ");
//         Console.WriteLine("Total number of words in sentences:" + data.Length);
//     }
// }