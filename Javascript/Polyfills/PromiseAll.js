function myAll(promises) {
const output = [];
let promisesResolved = 0;
return new Promise((resolve, reject)=>{
    try{
        promises.forEach(async(promise,index)=>{
            const response = await promise;
            promisesResolved+=1;
            output.push(response);
            if(promisesResolved === promises.length){
                resolve(output);
            }
        })
    }catch(err){
        reject(err)
    }
})
}

//////////////////


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 1");
    }, 3000);
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 2");
    }, 3000);
  });
  
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 3");
    }, 3000);
  });
  
  let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 4");
    }, 3000);
  });
  
  const arr = [promise1, promise2, promise3, promise4];

  myAll(arr).then((res) => {
    console.log(res);
  });