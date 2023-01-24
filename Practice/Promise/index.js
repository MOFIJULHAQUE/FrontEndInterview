const pr = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("step-1")
  }, 1500)
})
pr.then((result) => {
  console.log(result, "step-2");
})