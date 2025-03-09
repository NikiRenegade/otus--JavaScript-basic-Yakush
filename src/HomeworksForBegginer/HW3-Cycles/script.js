function GetSumFromFiftyToОneHundred() {
	let sum = 0
	for (let i = 50; i <= 100; i++) {
		sum += i
	}
	return sum
}

function GetSevenMultiplicationTable() {
	let table = []
	for (let i = 1; i <= 9; i++) {
		table.push(`7 x ${i} = ${7 * i}`)
	}
	return table
}

function GetAverageOddNumbers(n) {
	let sum = 0
	let count = 0
	if (n > 0) {
		for (let i = 1; i <= n; i += 2) {
			sum += i
			count++
		}
	} 
	else if (n <= 0) {
		for (let i = 1; i >= n; i -= 2) {
			sum += i
			count++
		}
	}
	return sum / count
}

module.exports = {
	GetSumFromFiftyToОneHundred,
	GetSevenMultiplicationTable,
	GetAverageOddNumbers,
}
