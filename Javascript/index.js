// // const container = document.getElementById('container');
// // console.log(container);

// // container[0].innerHTML = '<h2 style="color:cyan">Welcome to ABES EC</h2>';

// // const h1 = document.createElement('h1');
// // h1.innerText = "Computer Science and Engineering";
// // h1.style.color = 'green';
// // container.appendChild(h1);

// // const img = document.createElement('img');
// // img.src = "https://www.bing.com/ck/a?!&&p=2aeecb81edec14582a4479283b10e4c3227f3d70b653e2d0434af6f64ec13138JmltdHM9MTc1ODU4NTYwMA&ptn=3&ver=2&hsh=4&fclid=1026dbe6-c748-68ed-3059-c82cc64e6932&u=a1L2ltYWdlcy9zZWFyY2g_cT1idWxiK2ltYWdlJmlkPTcxNDU0RTU2OTI1RjhBNUIzQkY4MjZFNTkwQUVBQjkyNjMyODRBMTkmRk9STT1JQUNGSVI&ntb=1";
// // img.setAttribute('height', 200);
// // img.setAttribute('width', '300');
// // container[0].appendChild(img);

// // const button = document.getElementById('btn');
// // console.log(button);
// // function displayData() {
    
// // }
// // button.addEventListener('click', displayData);

// function msg(){
//     console.log("wlcm");
// }

// // console.log("start");
// // setTimeout(msg, 1000);
// // console.log("end");

// function msghandler(arg,clbk){
//     // console.log("hello"+arg);
//     // clbk();

//     const data=clbk(arg);
//     console.log(data);

// }

// const arr=["utkarsh","anshu","ashish"];

// arr.forEach(element=>{
//     msghandler(element, msg);
// })

// msghandler(" abes", msg);


// setTimeout(()=>{
//     console.log("first msg");
//     setTimeout(()=>{
//         console.log("second msg");
//         setTimeout(()=>{
//             console.log("third msg");
//             setTimeout(()=>{
//                 console.log("fourth msg");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);


// const mypromise = new Promise((resolve, reject) => {
//     const password = "abc123";
//     if(password.length>8){  
//         resolve("strong password");
//     }
//     else{
//         reject("weak password");
//     }
   
// });

//  mypromise.then((msg)=>{
//         console.log("inside then"+msg);
//     }).catch((err)=>{
//         console.log(err);
//     }).finally(msg=>{
//         console.log("inside finally");
// })


// async function promiseHandler(){
//     try{
//         const data = await mypromise;
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }


const button=document.getElementById('btn');

async function fetchdata(){
    console.log("enter inside function");
    const response=await fetch("https://fakestoreapi.com/products");
   const data=await response.json();
   console.log(data);
}

button.addEventListener('click', fetchdata);



