const parent = document.getElementById('parent')
console.log(parent)

const root = ReactDOM.createRoot(parent)
// const h2= React.createElement("h2",{style: {color: "brown", backgroundColor: "aqua"}}, "ABES Engineering College");
// const h1= React.createElement("h1", {style: {color: "green", backgroundColor: "pink"}}, "Skills");
// const li1= React.createElement("li", {}, "REACT");
// const li2= React.createElement("li", {}, "NODE");
// const li3= React.createElement("li", {}, "MONGODB");
// const ul= React.createElement("ul", {style: {color: "blue", backgroundColor: "yellow"}},li1, li2, li3);
// const img = React.createElement("img", {src: "https://tse2.mm.bing.net/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",style: { width: "200px", height: "200px", borderRadius: "50%" },alt: "landscape"});
// const myname = React.createElement('h3',{style: {float: "right"}} , "Utkarsh Sharma");

// const imgcontainer = React.createElement('div', {
//     style: {
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         gap: "60px"

// }}, img,myname)

// const wrapper = React.createElement('div',{} , h2,imgcontainer,h1,ul )
// root.render(wrapper);


const h21= <h2>hello, i'm using JSX</h2>
root.render(h21);