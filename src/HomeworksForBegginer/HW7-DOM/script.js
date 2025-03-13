
function ButtonShowOrHidden(input, button) {
	button.hidden = !input.value.trim();
}

function AddParagraph(input, main) {
	let p = document.createElement('p');
	p.textContent = input.value;
	main.append(p);
	if (document.querySelectorAll('p').length > 5) {
			RemoveParagraphs();
	}
}

function RemoveParagraphs() {
	document.querySelectorAll('p')[0].remove();
}

document.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelector('#input');
	const button = document.querySelector('#btnAdd');
	const main = document.querySelector('#main');
	input.addEventListener('input', () => ButtonShowOrHidden(input, button));
	button.addEventListener('click', () => AddParagraph(input, main));
});

module.exports = {
	ButtonShowOrHidden,
	AddParagraph,
	RemoveParagraphs
}
