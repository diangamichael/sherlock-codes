// this function is a second version of the contain.js code that checks if a number in contained in an array
// this solution uses the .indexOf() method to check if a number is contained in an array

function contain(arr, n) {
	if (arr.indexOf(n) >= 0)
		return true;

	return false;
}
