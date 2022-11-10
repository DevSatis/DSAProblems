function SubSequence(s, t, m, n)
{
     
    if (m == 0)
        return true;
    if (n == 0)
        return false;
          
    if (s[m - 1] == t[n - 1])
        return SubSequence(s, t, m - 1, n - 1);
 
    return SubSequence(s, t, m, n - 1);
}
 
// User Input
let s = "axc";
let t = "ahbgdc";
let m = s.length;
let n = t.length;
let result = SubSequence(s, t, m, n);
 
if (result)
    console.log(true);
else
    console.log(false);