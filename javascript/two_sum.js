// this is my solution to the two sum problem, takes an array and a number S,determines if any two numbers within the array sum to S.

function contain(n, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (n == arr[i])
			return true;
	}
	return false;
}

function two_sum(arr, S) {
	for (let i = 0; i < arr.length; i++) {
		let n = S - arr[i];
		if (contain(n, arr.pop(arr[i])))
			return true;
	}
	return false;
}

console.log(two_sum([1, 3, 6, 8], 2));
