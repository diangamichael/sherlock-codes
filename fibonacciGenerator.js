/* this is a fibonacci series generator that generates nth (parameter)
 * numbers in the famouse of the series */

function fibonacciGenerator(n) {
	let fib_series = [0, 1]

	if (n <= 2)
		return 'Enter a number greater than 2';

	for (let i=2;i<n;i++) {
		let next = fib_series[i-1] + fib_series[i-2];
		fib_series.push(next);
	}

	return fib_series;
}

console.log(fibonacciGenerator(20));
