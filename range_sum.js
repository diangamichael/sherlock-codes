/* this program writes javascript equivalent of the python range and sum functions */

function range(x, y) {
	var arr = [];
	for (var i = x; i <= y; i++) {
		arr.push(i);
	}
	return arr;
}

function sum(arr) {
	var val = 0;
	var j = 0;
	while (j <= arr.length) {
		val += arr[j];
		j++;
	}
	return val;
}

// note that the sum function always returns NaN
