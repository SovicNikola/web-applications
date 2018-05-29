let promise = new Promise((resolve, reject) => {
  let time = new Date();
  resolve(time);
});
promise.then(function(time) {
  console.log(time);
});
