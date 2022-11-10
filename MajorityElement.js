// Function to find Majority from an array

function MajorityArray(arr, n)
{
	let mCount = 0;
	let ind = -1; 
	
	for(let i = 0; i < n; i++)
	{
		let count = 0;
		for(let j = 0; j < n; j++)
		{
			if (arr[i] == arr[j])
				count++;
		}

		// Update mCount if count of current element is greater

		if (count > mCount)
		{
			mCount = count;
			ind = i;
		}
	}

	if (mCount > n / 2)
        console.log(arr[ind]);
	else
		console.log("There is No Majority Element");
}

let arr = [ 3, 2, 3];
let n = arr.length;
//Calling the function
MajorityArray(arr, n);

