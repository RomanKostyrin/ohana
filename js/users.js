let usersParam = {
	userList: ['admin', 'user1', 'user2', 'user3', 'user4', 'user5', 'user6'],
	permList: ['Контакты', 'Номенклатура', 'Пользователи'],
	admin:[1,1,0],
	user1:[1,1,0],
	user2:[1,1,0],
	user3:[1,1,1],
	user4:[1,1,0],
	user5:[0,1,0],
	user6:[1,0,0]
}

//добавляем нового юзера в список без доступа
function userAdd(user) {
	usersParam.userList.push(user)
	usersParam[user] = [0,0,0]
	console.log(usersParam)
}

//Получаем список разрешений для всех пользователей
function getUserPermissions() {
	usersParam.userList.forEach((element)=> {
		console.log(`User: ${element} has: ${usersParam[element]}`)
	})
}

