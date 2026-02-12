console.log("hii")
const parent = document.querySelector("#container");

const root = ReactDOM.createRoot(parent);
const h2  = React.createElement("h2", {}, "Wlcm to ReactJS");
const li1 = React.createElement("li", {}, "JAVA");
const li2 = React.createElement("li", {}, "PYTHON");

const ul = React.createElement("ul", {}, [li1, li2]);

const div = React.createElement("div", {}, [h2, ul]);
root.render(ul);