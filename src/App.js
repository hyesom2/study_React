import "./index.css";

export default function App() {
  return (
    <div className="App">
      <button
        onClick={() => console.log("onClick!")}
        onMouseDown={() => console.log("onMouseDown!")}
        onMouseUp={() => console.log("onMouseUp!")}
      >
        Button
      </button>
      <div
        className="box"
        onClick={() => console.log("onClick!")}
        onMouseEnter={() => console.log("onMouseEnter!")}
        onMouseLeave={() => console.log("onMOuseLeave")}
        onMouseMove={() => console.log("onMouseMove!")}
      ></div>
      <input
        type="text"
        onKeyDown={() => {
          console.log("onKeyDown!");
        }}
        onKeyUp={() => {
          console.log("onKeyUp!");
        }}
        onKeyPress={() => {
          console.log("onKeyPress!");
        }}
        onFocus={() => {
          console.log("onFocus!");
        }}
        onBlur={() => {
          console.log("onBlur!");
        }}
        onChange={() => {
          console.log("onChange!");
        }}
      />
    </div>
  );
}
