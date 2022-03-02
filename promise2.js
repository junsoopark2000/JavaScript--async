console.log("start");

const doSomething = () => {
	return new Promise((resolve, reject) =>
		setTimeout(() => resolve("HEN"), 5000)
	);
};

doSomething() //
	.then(console.log);

console.log("end");
