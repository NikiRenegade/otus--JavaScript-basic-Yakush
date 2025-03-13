function CreateUser(userName){
	return {name: userName};
}
function SetUserAge(user, userAge){
	user.age = userAge;
	return user;
}

function CreateAdmin(user, userRole) {
	return Object.assign({}, user, {role: "admin"});
	
}

function DestructuringAdminFields (user) {
	let { name, age, role} = user;
	return { name, age, role};
}

module.exports = {
	CreateUser,
	SetUserAge,
	CreateAdmin,
	DestructuringAdminFields,
}
