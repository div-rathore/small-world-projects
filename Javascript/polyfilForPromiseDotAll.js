function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }
  
      let results = [];
      let completedPromises = 0;
      let totalPromises = promises.length;
  
      if (totalPromises === 0) {
        return resolve([]); // If no promises, resolve immediately with an empty array
      }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise) // Ensure values are treated as promises
          .then((value) => {
            results[index] = value; // Store resolved value at correct index
            completedPromises++;
  
            if (completedPromises === totalPromises) {
              resolve(results); // Resolve when all promises complete
            }
          })
          .catch(reject); // Reject immediately if any promise fails
      });
    });
  }
  