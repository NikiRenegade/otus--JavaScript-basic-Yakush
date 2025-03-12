/**
 * @jest-environment jsdom
 */
const {
	ButtonShowOrHidden,
	AddParagraph,
	RemoveParagraphs,
} = require('../../../src/HomeworksForBegginer/HW7-DOM/script.js')

describe('Тест функций седьмого ДЗ', () => {
	let input;
	let button;
	let main;
	beforeEach(() => {
		document.body.innerHTML = `
            <div id="main">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus
					dignissimos, dolor et illum impedit magni modi nostrum officia sapiente
					sed, sit unde. Amet ducimus eligendi exercitationem iure nihil sapiente?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet
					consectetur cum deleniti earum ex illo impedit ipsam maxime, nihil optio
					quae, quasi quisquam rem repellendus temporibus totam vero vitae.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
					dignissimos molestias mollitia nihil perferendis ratione sint suscipit
					velit. Ad, ducimus laborum maxime modi quaerat quasi quisquam quod
					reiciendis temporibus vel.
				</p>
			</div>
			<input id="input" />
			<button id="btnAdd" hidden="hidden">Добавить параграф</button>
        `;
		input = document.querySelector('#input');
		button = document.querySelector('#btnAdd');
		main = document.querySelector('#main');
	});

	test('Проверка того что кнопка скрыта при пустом поле ввода', () => {
		ButtonShowOrHidden(input, button);
		expect(button.hidden).toBe(true);
	});
	test('Проверка того что кнопка не скрыта при заполненном поле ввода', () => {
		input.value = "Тест";
		ButtonShowOrHidden(input, button);
		expect(button.hidden).toBe(false);
	});
	test('Проверка добавления параграфа', () => {
		input.value = "Тест";
		AddParagraph(input, main);
		expect(document.querySelectorAll('p').length).toBe(4);
	});
	test('Проверка добавленного параграфа', () => {
		input.value = "Тест";
		AddParagraph(input, main);
		expect(document.querySelectorAll('p')[3].textContent).toBe("Тест");
	});
	test('Проверка максимального количества параграфов', () => {
		input.value = "Тест";
		AddParagraph(input, main);
		AddParagraph(input, main);
		AddParagraph(input, main);
		expect(document.querySelectorAll('p').length).toBe(5);
	});
});