const {
	GetDayOfWeek,
	GetMinutesToday
} = require('../../../src/HomeworksForBegginer/HW8-Date/script.js')

describe('Тест функций восьмого ДЗ', () => {
	test('Проверка дня недели', () => {
		expect(GetDayOfWeek("12.03.2025")).toBe("Среда");
		expect(GetDayOfWeek("17.02.2025")).toBe("Понедельник");
	})
	
	test('Проверка дня недели', () => {
		expect(GetMinutesToday()).toBe(1322); // 22:02
	})
})
