function GetMaxValue(a, b) {
	return Math.max(a,b);
}

function GetStringMonth(month) {
	const strMonths = [
    "Январь", "Февраль", "Март", "Апрель", 
    "Май", "Июнь", "Июль", "Август", 
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
return month > 12 || month < 1 ? "Ошибка!" : strMonths[month - 1];
}

function CanCicleInSquare(circleArea, squareArea) {
  return Math.sqrt(circleArea / Math.PI) * 2 <= Math.sqrt(squareArea) ? true : false;
}
module.exports = {
  GetMaxValue,
  GetStringMonth,
  CanCicleInSquare
};