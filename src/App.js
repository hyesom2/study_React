const arr = [1, 2, 3];
const arr1 = [];
const text = "";

export default function App() {
  return (
    <div>
      <h1>삼항연산자</h1>
      <ol>
        <li>{1 + 1 === 2 ? "참입니다." : "거짓입니다."}</li>
        <li>{1 + 1 === 3 ? "참입니다." : "거짓입니다."}</li>
      </ol>

      <h1>AND 연산자</h1>
      <ol>
        <li>{1 + 1 === 2 && "AND 연산자1"}</li>
        <li>{1 + 1 !== 2 && "AND 연산자1"}</li>
        <li>{arr.length && "AND 연산자2"}</li>
        <li>{arr1.length && "AND 연산자2"}</li>
        <li>{!!arr1.length && "AND 연산자2"}</li>
      </ol>

      <h1>OR 연산자</h1>
      <ol>
        <li>{1 + 1 !== 2 || "OR 연산자1"}</li>
        <li>{text || "OR 연산자2"}</li>
      </ol>
    </div>
  );
}
