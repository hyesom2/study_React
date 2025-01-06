import "./index.css";

// 2. style 재활용
const boxStyle = {
  position: "relative",
  top: 50,
  left: 50,
  width: "50%",
  height: "200px",
  padding: 20,
  background: "#ffaaaa",
  // 3. 속성은 camelCase
  borderRadius: 50,
};

export default function App() {
  return (
    <div
      style={{
        // 1. object로 css 작성
        position: "relative",
        width: 400,
        height: 1000,
        background: "#eee",
      }}
    >
      <div style={boxStyle}>Hello1</div>

      <div style={{ ...boxStyle, top: 100 }}>
        {/* 4. className을 통한 스타일링 (css-in-JS) */}
        <div className="highlight">Hello2</div>
      </div>

      <div style={{ ...boxStyle, top: 150 }}>
        {/* 5. 조건적 스타일 */}
        <div
          className={
            1 + 1 === 2 ? "highlight" : ""
            // 위와 아래의 결과는 동일하다.
            // 1 + 1 === 2 && "highlight"
          }
        >
          Hello3
        </div>
      </div>
    </div>
  );
}
