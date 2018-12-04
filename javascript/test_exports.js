var name = 'kunle';
var sname = 'oloyede';

exports.fname = function(s=name) {
	console.log(s + "name is first name");
}

exports.lname = function(s=sname) {
	console.log(s + "name is last name");
}
