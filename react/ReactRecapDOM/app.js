const parent = document.getElementById('parent');
console.log(parent)

const root = ReactDOM.createRoot(parent);
const h2 = React.createElement('h2',{}, "hello");
const heading = React.createElement('h1',{style:{color:'aqua',backgroundColor:'blue'}},"hello i am utkarsh");
const ans = <div style = {{textAlign:"center",border:"2px solid red",margin:"10px",padding:"10px",width:"500px"}}>
    <img src="https://th.bing.com/th?id=OIF.Jh4lcvhcINwlYe9jlHQF%2fw&w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
    <h2 style={{color:"black",backgroundColor:"lightgray"}}>NEW XIAMOI !& PRO MAX</h2>
    <h2 style={{color:'black',backgroundColor:"lightgray"}}>Price: $7000</h2>
    <h2 style={{color:'black',backgroundColor:"lightgray"}}>Description : The Xiaomi 17 Pro Max is a high-end smartphone It features a 6.9-inch AMOLED LTPO display with a resolution of 1200 x 2608 pixels </h2>
    <button style={{color:"gray" , backgroundColor:"lightgray", padding:"10px 20px", cursor:"pointer"}}>ADD To Cart</button>

</div>
root.render(ans);