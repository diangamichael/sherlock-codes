/* this program writes javascript equivalent of the python range and sum functions */

function range(x, y) {
	var arr = [];
	for (var i = x; i <= y; i++) {
		arr.push(i);
	}
	return arr;
}

function sum(arr) {
	return arr.reduce((x, y) => x+y);
}

// test the result of both functions
console.log(sum(range(1, 10)));
