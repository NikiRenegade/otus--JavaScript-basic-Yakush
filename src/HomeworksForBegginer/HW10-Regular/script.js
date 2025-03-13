function IsDateOrEmail(str) {
	const regexDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;
	const regexEmail = /^[a-zA-Z\.0-9]+@[a-z0-9]+\.[a-z]{2,5}$/;
	return regexDate.test(str) ? "Date" : regexEmail.test(str) ? "Email" : null;
}

module.exports = {
	IsDateOrEmail
}