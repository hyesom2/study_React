/* 
  - value를 state로 만들기
  - Increase 버튼 함수 만들기 (+함수형 인자로)
  - Reset 버튼 함수 만들기
*/
import { useState } from "react";

export default function App() {
  let value = 0;
  const [newValue, setNewValue] = useState(0);

  return (
    <div>
      {/* 1. state 사용 X */}
      <div>
        <div>value: {value}</div>
        <button
          type="button"
          onClick={() => {
            console.log("increase1", value);
            value = value + 1;
            console.log("increase2", value);
          }}
        >
          Increase Button
        </button>
        <button type="button">Reset Button</button>
      </div>
      <div>
        <div>newValue: {newValue}</div>
        <button
          type="button"
          onClick={() => {
            console.log("increase1", newValue);
            setNewValue(newValue + 1);
            console.log("increase2", newValue);
          }}
        >
          Increase Button
        </button>
        <button
          type="button"
          onClick={() => {
            setNewValue(0);
          }}
        >
          Reset Button
        </button>
      </div>
    </div>
  );
}
