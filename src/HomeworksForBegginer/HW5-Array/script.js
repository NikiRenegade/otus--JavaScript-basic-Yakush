function CreateArray(){
	return [1,3,5,7,-1,-3,-5,-7,-10,10];
}
function GetSumArray(array){
	return array.reduce((acc, el) => acc + el, 0);
}

function GetDoubleArray(array) {
	return array.map(el => el * 2);
	
}

function FindMinMaxValue (array) {
	return {
		min: Math.min(...array),
		max: Math.max(...array)
	};
}

module.exports = {
	CreateArray,
	GetSumArray,
	GetDoubleArray,
	FindMinMaxValue,
}
