const element1 = React.createElement(
  "h1",

  {
    id: "first",
    className: "keshav",
    style: { backgroundColor: "blue", color: "pink" },
  },

  "hello coder army",
);


const element2 = React.createElement("h2", {id:"second"}, "hello bhai log");

const reactroot = ReactDOM.createRoot(document.getElementById("root"));

reactroot.render(element1);

reactroot.render(element2);
