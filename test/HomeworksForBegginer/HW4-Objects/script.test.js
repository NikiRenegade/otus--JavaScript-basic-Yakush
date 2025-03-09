const {
	CreateUser,
	SetUserAge,
	CreateAdmin,
	DestructuringAdminFields,
} = require('../../../src/HomeworksForBegginer/HW4-Objects/script.js')

describe('Тест функций четвертого ДЗ', () => {
	test('Создание объекта user с именем Josh', () => {
		expect(CreateUser("Josh")).toEqual({name: "Josh"})
	})

	test('Установка user age', () => {
		expect(SetUserAge(null)).toBe(null)
	})

	test('Установка user role', () => {
		expect(CreateAdmin(null)).toBe(null)
	})

	test('Деструктуризация объекта admin', () => {
		expect(DestructuringAdminFields(null)).toBe(null)
	})
})
