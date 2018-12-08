/* this program makes seven calls to console.log to output a triangle */

function triangle() {
	var i = process.argv[2];
	var hashes = '#';
	
	while(i > 0) {
		console.log(hashes);
		hashes += '#';
		--i;
	}		
}

triangle();
