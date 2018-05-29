var array = [];
for (let i = 0; i < 100; i++) {
  var promise = new Promise((resolve, reject) => {
    var id = i;
    var time = parseInt((500 - 75) * Math.random() + 75);
    setTimeout(() => {
      resolve(id);
    }, time);
  });
  array.push(promise);
}

promise.then(id => {
  return id;
  //   console.log(id);
});
Promise.race(array).then(x => {
  // veliko slovo jer je definisana nad tipom a ne nad objektom !!!!!!!!!!!! upamti kao tako....
  // x je ono sto je then pre njega vratio

  console.log(x);
});
Promise.all(array).then(() => {
  console.log("All good ;)");
});
