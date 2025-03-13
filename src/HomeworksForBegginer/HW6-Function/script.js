function Diff(a, b){
	return Math.abs(a - b);
}
function IsWord(str){
	return str.includes(" ") ? false : true;
}

function Pow(a, x) {
	return Math.pow(a, x);
	
}

module.exports = {
	Diff,
	IsWord,
	Pow
}
