using System;
using System.Collections.Generic;

class Program
{
    static bool Same(int[] arr1, int[] arr2)
    {
        if (arr1.Length != arr2.Length)
        {
            return false;
        }

        var frequencyCounterArr1 = new Dictionary<int, int>();
        var frequencyCounterArr2 = new Dictionary<int, int>();

        foreach (var number in arr1)
        {
            if (!frequencyCounterArr1.ContainsKey(number))
            {
                frequencyCounterArr1[number] = 0;
            }
            frequencyCounterArr1[number]++;
        }

        foreach (var number in arr2)
        {
            if (!frequencyCounterArr2.ContainsKey(number))
            {
                frequencyCounterArr2[number] = 0;
            }
            frequencyCounterArr2[number]++;
        }

        foreach (var element in frequencyCounterArr1)
        {
            int squared = element.Key * element.Key;
            if (!frequencyCounterArr2.ContainsKey(squared) || frequencyCounterArr2[squared] != element.Value)
            {
                return false;
            }
        }

        return true;
    }

    static void Main()
    {
        bool result = Same(new int[] { 1, 2, 2, 3, 3, 3 }, new int[] { 1, 9, 9, 9, 2, 4 });
        Console.WriteLine(result);
    }
}