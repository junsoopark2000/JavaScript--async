// function delay(ms) {
// 	return new Promise((resolve) => setTimeout(resolve, ms));
// }

delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getApple() {
	console.log("getApple start");
	await delay(5000);
	console.log("getApple end");
	return "APPLE";
}

async function getBanana() {
	console.log("getBanana  start");
	await delay(2000);
	console.log("getBanana end");
	return "BANANA";
}

console.log("program start");

async function makeJuice() {
	// start all job at the same time, in ca no depencency eachother
	const fruits = await Promise.all([getApple(), getBanana()]);

	// sequential, due to the dependency to getApple()
	// const fruit1 = await getApple();
	// const fruit2 = await getBanana();

	console.log(fruits + " juice made");
}

makeJuice();
console.log("program end");
