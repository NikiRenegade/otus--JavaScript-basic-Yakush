const {
	GetMaxValue,
	GetStringMonth,
	CanCicleInSquare
} = require('../../../src/HomeworksForBegginer/HW2-Condition/script.js')

describe('Тест функций второго ДЗ', () => {
	describe('Определение максимального значения', () => {
		test('Корректное определение у положительных чисел', () => {
			expect(GetMaxValue(10, 13)).toBe(13)
		})
		test('Корректное определение у отрицательных чисел', () => {
			expect(GetMaxValue(-5, -12)).toBe(-5)
		})
		test('Корректное определение у чисел записанных в текстовом формате', () => {
			expect(GetMaxValue('-8', '10')).toBe(10)
		})
	})
	describe('Тест определения месяца', () => {
		test('Корректное определение месяца', () => {
			expect(GetStringMonth(10)).toBe('Октябрь')
		})
		test('Уведомление об ошибке', () => {
			expect(GetStringMonth(-5)).toBe('Ошибка!')
		})
	})

	describe('Тест определения поместиться ли круг в квадрат', () => {
		test('Корректное уведомление о том что круг помещается', () => {
			expect(CanCicleInSquare(40, 100)).toBe(true)
		})
		test('Корректное уведомление о том что круг не помещается', () => {
			expect(CanCicleInSquare(100,81)).toBe(false)
		})
	})
})
