using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<string> words = new List<string> { "hello", "bye", "adios" };
        var capitalizedWords = CapitalizeWords(words);
        Console.WriteLine(String.Join(", ", capitalizedWords));
    }

    static List<string> CapitalizeWords(List<string> arr)
    {
        if (arr.Count == 0) return new List<string>();

        List<string> wordsArray = new List<string>();

        void CapitalizeHelper(List<string> array)
        {
            if (array.Count == 0) return;
            string firstWord = array[0];
            string capitalizedWord = firstWord.ToUpper();
            wordsArray.Add(capitalizedWord);

            List<string> filteredArr = array.Where(word => word != array[0]).ToList();
            CapitalizeHelper(filteredArr);
        }

        CapitalizeHelper(arr);
        return wordsArray;
    }
}
