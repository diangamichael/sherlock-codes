// this function takes two arguments, one number and an array, it returns true if the number is in the array and false if otherwise

function contain(n, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (n == arr[i])
			return true;
	}
	return false;
}
