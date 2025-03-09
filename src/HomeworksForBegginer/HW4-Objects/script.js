function CreateUser(userName){
	return {name: userName};
}
function SetUserAge(user, userAge){
	user.age = userAge;
	return user;
}

function CreateAdmin(user, userRole) {
	return null;
}

function DestructuringAdminFields () {
	return null;
}


module.exports = {
	CreateUser,
	SetUserAge,
	CreateAdmin,
	DestructuringAdminFields,
}
