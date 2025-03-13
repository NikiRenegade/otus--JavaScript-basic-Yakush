function isRightTriangle(a, b, c) {
	return a > b && a > c ? Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2) :
				 b > a && b > c ? Math.pow(b, 2) === Math.pow(a, 2) + Math.pow(c, 2) :
				 c > a && c > b ? Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2): false;
}

function GetAreaAndCircumferenceCircle(r) {
	return {area: Math.PI * 2 * r, Circumference: Math.PI * Math.pow(r, 2)};
}

function GetRootsQuadraticEquation(a, b, c) {
	let d = Math.pow(b, 2) - 4 * a * c;
	return d > 0 ? 
						{x1: (-b + Math.sqrt(d)) / (2 * a), 
						 x2: (-b - Math.sqrt(d)) / (2 * a)} :
				 d === 0 ? 
						{x1: (-b) / (2 * a), x2: null} 
				 :  {x1: null, x2: null}
	
}

module.exports = {
	isRightTriangle,
	GetAreaAndCircumferenceCircle,
	GetRootsQuadraticEquation
}