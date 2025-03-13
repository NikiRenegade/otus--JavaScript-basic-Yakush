const {
	IsDateOrEmail,
} = require('../../../src/HomeworksForBegginer/HW10-Regular/script.js')

describe('Тест функций десятого ДЗ', () => {
	test('Проверка регулярного выражения', () => {
		expect(IsDateOrEmail("10.12.2025")).toBe("Date");
		expect(IsDateOrEmail("test@gmail.com")).toBe("Email");
		expect(IsDateOrEmail("Hello world")).toBe(null);
	})
})
