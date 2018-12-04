// the legendary fizzbuzz challenge

function fizzbuzz(n) {
	var result = [];

	for (let i = 1; i <= n; i++) {
		
        if (i % 15 == 0) {
			result.push("FizzBuzz");
			continue;
		} else if (i % 5 == 0) {
			result.push("Buzz");
			continue;
		} else if (i % 3 == 0) {
			result.push("Fizz");
			continue;
	   } else {
            result.push(i);
       }
    }

	return result;
}

console.log(fizzbuzz(100));
