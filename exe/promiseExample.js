const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved");
    }, 3000);
    // resolve();
    // reject("dummy test");
  });
};

const promiseResponse = myPromise();

promiseResponse
  .then((response) => {
    console.log(response);
    return "Test1";
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("in catch " + err);
  });
