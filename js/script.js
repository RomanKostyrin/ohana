const addNewUserBtn = document.querySelector('.submitBtn2')
const submitBtn = document.querySelector('.submitBtn')
let select = document.querySelector('#verse-choose')
let result = document.querySelector('.value')
const forma = document.querySelector('.form')
let links = document.querySelectorAll('.links')
const btn =document.querySelector('.Btn')
const table = document.querySelector('.table')
const newUserName = document.querySelector('.newUserName')
const puncts = document.querySelector('.puncts')
function showSelect(value) {
	result.value = value
	forma.style.margin = `${value}px`
}

btn.addEventListener('click', ()=> {
	event.preventDefault()
	getTable()
})

function getTable() {
	//Строим заголовок
	usersParam.userList.forEach((element)=> {
		let $th = document.createElement('th');
		$th.innerHTML = `${element}`;
		puncts.append($th)
	})
	usersParam.permList.forEach((element, i)=> {
	let $tr = document.createElement('tr');
	$tr.className = `links links--${i}`	
	table.append($tr)
	let $td1 = document.createElement('td');
	$td1.innerHTML = `${element}`;
	$tr.append($td1)
	usersParam.userList.forEach((element)=> {
		let $td = document.createElement('td');			
		$tr.append($td)
		let boolean = false			
		//Проверяем чекбоксы 
		if (usersParam[element][i] === 1) {boolean = true }
		let $checkbox = createCheckbox(boolean, element)
		$td.append($checkbox)
		})
	})
}

function createCheckbox(isChecked, id) {
	let $input = document.createElement('input');
	$input.type = 'checkbox'
	$input.checked = isChecked
	$input.classList.add('checkbox')
	$input.id = id
	return $input
}

//считываем чекбоксы и заносим обратно в переменную
submitBtn.addEventListener('click', ()=> {
	event.preventDefault()
	usersParam.userList.forEach((element)=> {
		let $tempUser = document.querySelectorAll(`#${element}`)
		$tempUser.forEach((elem, i)=> {
			if (elem.checked) {
				usersParam[element][i] = 1
			} else {
				usersParam[element][i] = 0
			}
		})
	})
})

addNewUserBtn.addEventListener('click', ()=> {
	event.preventDefault()
	userAdd(newUserName.value)
})

getTable()