const {
	GetSum,
	GetMultiplication,
	GetSumAndMultiplication,
	GetSymbolsCount,
	SomeThreeNumber,
} = require('../../../src/HomeworksForBegginer/HW1-DataType/script.js')
describe('Тест функций первого ДЗ', () => {
	describe('Тест функций которым необходимо вернуть произведение и сумму двух чисел', () => {
		describe('GetSum', () => {
			test('Корректное сложение положительных чисел', () => {
				expect(GetSum(10, 13)).toBe(23)
			})
			test('Корректное сложение отрицательных чисел', () => {
				expect(GetSum(-5, -12)).toBe(-17)
			})
			test('Корректное сложение чисел разного знака', () => {
				expect(GetSum(-8, 5)).toBe(-3)
			})
		})

		describe('Тест GetMultiplication', () => {
			test('Корректное умножение положительных чисел', () => {
				expect(GetMultiplication(10, 13)).toBe(130)
			})
			test('Корректное умножение отрицательных чисел', () => {
				expect(GetMultiplication(-5, -12)).toBe(60)
			})
			test('Корректное умножение чисел разного знака', () => {
				expect(GetMultiplication(-8, 5)).toBe(-40)
			})
		})

		describe('Тест GetSumAndMultiplication', () => {
			test('Корректное сложение и умножение положительных чисел', () => {
				expect(GetSumAndMultiplication(10, 13)).toBe(
					`Сумма двух чисел: ${23}, Произведение двух чисел: ${130}`
				)
			})
			test('Корректное сложение и умножение отрицательных чисел', () => {
				expect(GetSumAndMultiplication(-5, -12)).toBe(
					`Сумма двух чисел: ${-17}, Произведение двух чисел: ${60}`
				)
			})
			test('Корректное сложение и умножение  чисел разного знака', () => {
				expect(GetSumAndMultiplication(-8, 5)).toBe(
					`Сумма двух чисел: ${-3}, Произведение двух чисел: ${-40}`
				)
			})
		})
	})

	describe('Тест функции получения количества символов двух слов', () => {
		describe('GetSymbolsCount', () => {
			test('Корректное получение длины строки при сложении двух символьных элементов', () => {
				expect(GetSymbolsCount('Привет ', 'мир')).toBe(10)
			})
			test('Корректное получение длины строки при сложении двух числовых элементов', () => {
				expect(GetSymbolsCount(22, -12)).toBe(5)
			})
			test('Корректное получение длины строки при сложении двух массивов', () => {
				expect(GetSymbolsCount([3, 2, 6], [3, 5, 7])).toBe(10)
			})
		})
	})

	describe('Тест функции сложения трех цифр', () => {
		describe('SomeThreeNumber', () => {
			test('Корректное получение сложения с корректными данными', () => {
				expect(SomeThreeNumber(286)).toBe(16)
			})
			test('Корректное получение сложения с корректными данными записанными в виде строки', () => {
				expect(SomeThreeNumber('586')).toBe(19)
			})
			test('Получение ошибки с некорректными данными (символов больше 3)', () => {
				expect(SomeThreeNumber(8654)).toBe('Ошибка!')
			})
			test('Получение ошибки с некорректными данными с некорректными данными (на вход подаются буквы)', () => {
				expect(SomeThreeNumber('a7g')).toBe('Ошибка!')
			})
		})
	})
})
