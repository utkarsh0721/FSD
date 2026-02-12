async function getData(){
    console.log('starting...');
    const result = await someAsyncOperation();
    console.log(`result: ${result}`);
    return result;
}
function someAsyncOperation(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve('operation completed'),1000);
    });
}

getData().then(data=>console.log('final data:',data))