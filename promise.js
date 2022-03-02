// 1. Producer
// IMPORTANT - automatically run when we make a Promise object

const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(resolve("HEN"), 2000);
	});

const getEgg = (hen) =>
	new Promise((resolve, reject) => {
		setTimeout(
			reject(new Error(`got the ${hen}, But fail to get an Egg from ${hen}`)),
			1000
		);
	});

const makeMeal = (egg) =>
	new Promise((resolve, reject) => {
		setTimeout(resolve(`${egg} -> MEAL`), 1000);
	});

// 2. Consumer

getHen()
	.then((hen) => getEgg(hen))
	.catch((err) => {
		console.log(err);
		return `HEN -> xx`;
	})
	.then((egg) => makeMeal(egg))
	.then((meal) => console.log(meal))
	.catch((e) => console.log(e));
