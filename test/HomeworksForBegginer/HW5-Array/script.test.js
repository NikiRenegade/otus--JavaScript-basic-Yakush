const {
	CreateArray,
	GetSumArray,
	GetDoubleArray,
	FindMinMaxValue,
} = require('../../../src/HomeworksForBegginer/HW5-Array/script.js')

describe('Тест функций пятого ДЗ', () => {
	test('Создание массива', () => {
		expect(CreateArray().length).toBe(10);
	})

	test('Получение суммы всех элементов массива', () => {
		let array = CreateArray();
		expect(GetSumArray(array)).toBe(0);
	})

	test('Получение нового массива на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива', () => {
		let array = CreateArray();
		expect(GetDoubleArray(array)).toEqual([2,6,10,14,-2,-6,-10,-14,-20,20]);
	})

	test('Деструктуризация объекта admin', () => {
		let array = CreateArray();
		expect(FindMinMaxValue(array)).toEqual({min: -10, max: 10})
	})
})
