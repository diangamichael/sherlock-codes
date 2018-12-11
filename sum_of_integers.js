/* this function returns the sum of all positive integers that are multiples of a number(third argument) using a range of numbers(first and second arguments) */ 

function sumOfIntegers(start, end, multiple) {
	let result = 0;

	while ( start <= end ) {
		if ( start % multiple == 0 )
			result += start;

		start++;
	}

	return result;
};

console.log(sumOfIntegers(1, 250, 9));
