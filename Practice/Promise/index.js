const pr = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("success ---->");
  }, 2000);
});

pr.then(function
  (result) {
  console.log(result, "Print after resolve the promise");
});
