const url="https://dummyjson.com/products";
const pr =fetch(url);
    pr.then((res))={
        return res.json();
    })
    console.error("error: ",err.message);



    .then((data)=>{
        data.users.forEach((da=>{
            console.log("name=",da.firstName);
            console.log("email=",da.email);
            console.log("ip=",da.ip);
            console.log("macaddress=",da.macAddress);            
                
            });
            console.log("name=",da.firstName);
        }
    )