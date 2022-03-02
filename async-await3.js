function fetchItems() {
	console.log("I am in fetch items");
  return new Promise(function(resolve, reject) {
    var items = [1,2,3];
    resolve(items)
  });
}

async function logItems() {
  console.log("I am in log items");
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}



console.log("-- start --");
logItems();
console.log("-- end -- ");
