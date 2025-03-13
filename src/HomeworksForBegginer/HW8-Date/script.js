function GetDayOfWeek(dateStr) {
	let [day, month, year] = dateStr.split('.').map(Number);
	let date = new Date(year, month - 1, day);
	let daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysWeek[date.getDay()];
}

function GetMinutesToday() {
	let now = new Date();
	let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	return Math.floor((now - startOfDay) / 60000);
}

module.exports = {
	GetDayOfWeek,
	GetMinutesToday
}