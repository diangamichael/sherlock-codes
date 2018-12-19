/* this functions returns true if the parameter is a prime number
 * and false if otherwise */

function isPrime(n) {
	let i = 2;

	while(i < n) {
		if (n % i === 0)
			return false;
		i++;
	}

	return true;
}

console.log(isPrime(13));
console.log(isPrime(76));
console.log(isPrime(79));


