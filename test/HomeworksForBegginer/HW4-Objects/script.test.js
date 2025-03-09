const {
	CreateUser,
	SetUserAge,
	CreateAdmin,
	DestructuringAdminFields,
} = require('../../../src/HomeworksForBegginer/HW4-Objects/script.js')

describe('Тест функций четвертого ДЗ', () => {
	test('Создание объекта user с именем Josh', () => {
		expect(CreateUser("Josh")).toEqual({name: "Josh"});
	})

	test('Установка user age', () => {
		let user = CreateUser("Josh");
		expect(SetUserAge(user, 27)).toEqual({name: "Josh", age: 27});
	})

	test('Установка user role', () => {
		let user = CreateUser("Josh");
		user = SetUserAge(user, 27);
		expect(CreateAdmin(user, "admin")).toEqual({name: "Josh", age: 27, role: "admin"});
	})

	test('Деструктуризация объекта admin', () => {
		let user = CreateUser("Josh");
		user = SetUserAge(user, 27);
		let admin = CreateAdmin(user, "admin");
		expect(DestructuringAdminFields(null)).toEqual({newName: "Josh", newAge: 27, newRole: "admin"})
	})
})
