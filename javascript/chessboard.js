/* this program generates a chessboard with the grid size being the size of the command line argument */

// store the command line argument in a variable
var i = process.argv[2];

// this function generates the default pattern based on the grid size/command line argument
function row() {
	var str = "";
	var j = i;
	while(j > 0) {
		if (j % 2 == 0)
			str += " ";
		else 
			str += "#";
		--j;
	}
	return str;
}

// to produce the alternating squares found in a chessboard the reverse function is used to reverse the default pattern
function reverse(str) {
	new_str = ""; 
	for(var j = str.length - 1; j >= 0; j--) {
		new_str += str[j]
	}
	return new_str;
}

//store the two pattern in a variables so they can be passed to the print function
var pattern1 = row();
var pattern2 = reverse(pattern1);

//the function print generates the full chessboard by alternating between the default and the reverse pattern
function print(x, y) {
	var j = i;
	while(j > 0) {
		if (j % 2 == 0)
			console.log(x);
		else
			console.log(y);
		--j;
	}
}

print(pattern1, pattern2);

  
