const { error } = require("console");
const { resolve } = require("path");

const myPromise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        const success = Math.random()>0.5;
        if(success){
            resolve('Operation Completetd Successfully');
        }else{
            reject(new Error('operation failed'));
        }
    },1000);
});

myPromise.then(result => console.log("success",result))
.catch(error=>console.error('error',error.message));