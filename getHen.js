// const delay = (ms) =>
// 	new Promise((resolve, reject) => {
//     setTimeout(resolve, ms)
//   })

const getHen = () =>
	new Promise((res, rej) => {
		setTimeout(() => {
			res("HEN"), 2000;
		});
	});

const getEgg = (hen) =>
	new Promise((res, rej) => {
		setTimeout(() => {
			res(hen + "=>EGG"), 3000;
		});
	});

const getMeal = (egg) =>
	new Promise((res, rej) => {
		setTimeout(() => {
			res(egg + "=>MEAL"), 3000;
		});
	});

// getHen() //
// 	.then((hen) => getEgg(hen))
// 	.then((egg) => getMeal(egg))
// 	.then((meal) => console.log(meal));

getHen() //
	.then(getEgg)
	.then(getMeal)
	.then(console.log);
