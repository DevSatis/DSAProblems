//Function for checking the Isomorphic
function checkIsomorphic(str1, str2)
    {
        let size = 256;
        let m = str1.length;
        let n = str2.length;
          
        // Length of strings must be same
        
        if(m != n)
            return false;
       
        let cog = new Array(size);
          
        for(let i = 0; i < size; i++)
            cog[i]= false;
          
        let mapChar = new Array(size);
        mapChar.fill(0);
          
        for(let i = 0; i < size; i++)
        mapChar[i]= -1;
      
        for (let i = 0; i < n; i++)
        {
            
            if (mapChar[str1[i].charCodeAt()] == -1)
            {
                  
                
                if (cog[str2[i].charCodeAt()] == true)
                    return false;
  
                cog[str2[i].charCodeAt()] = true;
  
                mapChar[str1[i].charCodeAt()] = str2[i].charCodeAt();
            }
            else if (mapChar[str1[i].charCodeAt()] != str2[i].charCodeAt())
                return false;
        }
        return true;
    }
     
    let result = checkIsomorphic("egg", "add");
    console.log(result);
 
    result = checkIsomorphic("too", "bar");
    console.log(result);