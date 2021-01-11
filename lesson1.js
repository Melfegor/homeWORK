/*let arr = [
	{
		name: 'vasya',
		gender: 'male',
		age: 20
	},
	{
		name: 'tanya',
		gender: 'female',
		age: 30
	},
	{
		name: 'petya',
		gender: 'male',
		age: 25
	}
]

/*
Допиши функцию так, что бы она отдавала только тех пользоваелей, чей пол соответствует указанному и возраст больше указанного
function filterByGenderAndAge (gender, age){
	return arr.filter(() => {})
}

console.log(filterByGenderAndAge('male', 22)) */

let arr = [
	{
		name: 'vasya',
		gender: 'male',
		age: 20
	},
	{
		name: 'tanya',
		gender: 'female',
		age: 30
	},
	{
		name: 'petya',
		gender: 'male',
		age: 25
	}
]

/*console.log (
	arr.filter((a) => { return a.gender == 'male' && a.age > 22 } )
	)*/

function filterByGenderAndAge (gender, age) {
	return arr.filter ((a, b) => {
		return a.gender == gender
		&&
		b.age > age;
	}) 
}

console.log (filterByGenderAndAge('male',22))