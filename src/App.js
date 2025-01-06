const text = "Hello, World!";
const num = 10;
const obj = { key: 0, a: 1, b: 2 };
const arr = ["a", "b", "c"];
const imageUrl =
  "https://cdn.pixabay.com/photo/2023/10/23/16/24/bird-8336436_1280.jpg";

export default function App() {
  return (
    <div>
      <h1>변수 넣기</h1>
      <ol>
        <li>{text}</li>
        <li>{text + "test"}</li>
      </ol>

      <h1>숫자 및 계산식 넣기</h1>
      <ol>
        <li>{num}</li>
        <li>{num + 15}</li>
      </ol>

      <h1>Boolean, Nullish 값 넣기</h1>
      <ol>
        <li>{true}</li>
        <li>{false}</li>
        <li>{undefined}</li>
        <li>{null}</li>
      </ol>

      <h1>Object, Array 넣기</h1>
      <ol>
        {/* <li>{obj}</li> */}
        <li>{arr}</li>
        <li>{[<div>111</div>, <div>222</div>, <div>333</div>]}</li>
      </ol>

      <h1>주석 넣기</h1>
      <ol>
        <li>{/* 주석 넣기 */}</li>
      </ol>

      <h1>태그 속성에 넣기</h1>
      <ol>
        <li>
          <img src={imageUrl} alt="새" style={{ width: 400 }} />
        </li>
      </ol>
    </div>
  );
}
