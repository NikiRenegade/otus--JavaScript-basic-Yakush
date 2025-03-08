function GetSum(a, b){
	return a + b;
}//
function GetMultiplication(a, b){
	return a * b;
}
function GetSumAndMultiplication(a, b){
	return `Сумма двух чисел: ${GetSum(a, b)}, Произведение двух чисел: ${GetMultiplication(a, b)}`;
}

function GetSymbolsCount(word1, word2){
	return ("" + word1 + word2).split("").length;
}

function SomeThreeNumber(number){
	return  isNaN(Number(number)) === true || number.split("").length !== 3 ? "Ошибка!" : number.split("").reduce((acc, el) => acc + Number(el), 0);
}

module.exports = {
  GetSum,
  GetMultiplication,
  GetSumAndMultiplication,
  GetSymbolsCount,
  SomeThreeNumber,
};