//Function to check if the string are anagram.

function areAnagram(str3,str4)
    {
    
        let n1 = str3.length;
        let n2 = str4.length;
   
        // If the length of strings are not same,then they cannot be anagram
        if (n1 != n2)
            return false;
        
        // If length are equal then Sort both strings
        str3.sort();
        str4.sort()
   
        // Comparing the sorted strings
        for (let i = 0; i < n1; i++)
            if (str3[i] != str4[i])
                return false;
   
        return true;
    }
     
    // User Input
    let str1='tap';
    let str2='pet';
    //Convert user input string in to char.
    let str3 = str1.split("");
    let str4 = str2.split("");

     
    // calling the Function
        if (areAnagram(str3, str4))
            console.log("The strings are anagram");
        else
            console.log("The strings are not anagram");