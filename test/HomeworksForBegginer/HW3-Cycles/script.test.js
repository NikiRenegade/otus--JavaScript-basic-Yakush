const {
	GetSumFromFiftyToОneHundred,
	GetSevenMultiplicationTable,
	GetAverageOddNumbers
} = require('../../../src/HomeworksForBegginer/HW3-Cycles/script.js')

describe('Тест функций третьего ДЗ', () => {
	test('Получение суммы чисел от 50 до 100', () => {
		expect(GetSumFromFiftyToОneHundred(10, 13)).toBe(3825)
	})

	test('Получение таблицы умножения на 7', () => {
		expect(GetSevenMultiplicationTable(-5, -12)).toEqual([
			'7 x 1 = 7',
			'7 x 2 = 14',
			'7 x 3 = 21',
			'7 x 4 = 28',
			'7 x 5 = 35',
			'7 x 6 = 42',
			'7 x 7 = 49',
			'7 x 8 = 56',
			'7 x 9 = 63',
		])
	})
	describe('Получение среднее арифметическое всех нечётных чисел от 1 до N', () => {
		test('Корректное получение средне арифметического при корректном входном параметре', () => {
			expect(GetAverageOddNumbers(20)).toBe(10)
		})

		test('Корректное получение средне арифметического при корректном входном параметре в текстовом формате', () => {
			expect(GetAverageOddNumbers("15")).toBe(8)
		})
		test('Корректное получение средне арифметического при 0 в качестве входного параметра', () => {
			expect(GetAverageOddNumbers(0)).toBe(1)
		})
		test('Корректное получение средне арифметического при отрицательном входном параметре', () => {
			expect(GetAverageOddNumbers(-5)).toBe(-2)
		})
	})
})
