// using System.Collections;
// class NonGenericExample
// {
//     static void Main()
//     {
//         // int num = 45;
//         // object boxedvalue = num;//boxing
//         // Console.WriteLine(boxedvalue.GetType());

//         ArrayList arrayList = new ArrayList();//it will store the values in objct
//         int value = 20;

//         arrayList.Add(value);//boxing
//         Console.WriteLine(arrayList.GetType());

//         int unboxingvalue = (int)arrayList[0];//unboxing

//         Console.WriteLine("The value after unboxing" + unboxingvalue);

//         //Generic one
//         List<int> intList = new List<int>();
//         intList.Add(value);//no boxing is
//         int value2 = intList[0];//no unboxing required
//         Console.WriteLine("the value after unboxing"+value2);


//     }
// }