const {
	Diff,
	IsWord,
	Pow,
} = require('../../../src/HomeworksForBegginer/HW6-Function/script.js')

describe('Тест функций шестого ДЗ', () => {
	test('Получение разницы двух чисел', () => {
		expect(Diff(5, -8)).toBe(13);
	})

	test('Функция возвращает true, если строка состоит из одного слова', () => {
		expect(IsWord("Привет мир")).toBe(false);
		expect(IsWord("Привет")).toBe(true);
	})

	test('Получение числа a возведенного в степень x', () => {
		expect(Pow(5, 3)).toEqual(125)
	})
})
