const {
	isRightTriangle,
	GetAreaAndCircumferenceCircle,
	GetRootsQuadraticEquation
} = require('../../../src/HomeworksForBegginer/HW9-Math/script.js')

describe('Тест функций девятого ДЗ', () => {
	test('Проверка на прямоугольный треугольник', () => {
		expect(isRightTriangle(3, 4, 5)).toBe(true);
		expect(isRightTriangle(6, 8, 10)).toBe(true);
		expect(isRightTriangle(7, 15, 18)).toBe(false);
		expect(isRightTriangle(4, 6, 8)).toBe(false);
	})
	
	test('Получение площади круга и длины окружности', () => {
		expect(GetAreaAndCircumferenceCircle(5)).toBe({area: Math.PI * 10, Circumference: Math.PI * 25}); 
		expect(GetAreaAndCircumferenceCircle(3)).toBe({area: Math.PI * 6, Circumference: Math.PI * 9}); 
	})

	test('Получение корней квадратного уравнения', () => {
		expect(GetRootsQuadraticEquation(1, -3, 2)).toEqual({ x1: 2, x2: 1 });
		expect(GetRootsQuadraticEquation(1, -2, 1)).toEqual({ x1: 1, x2: null });
		expect(GetRootsQuadraticEquation(1, 1, 1)).toEqual({ x1: null, x2: null });
	})
})
