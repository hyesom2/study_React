/* 
  ※ JSX로 구구단 출력하기
  - 구구단 2~9단을 출력하세요.
  - 단, 5단은 제외합니다.
  - 홀수 단은 다른 색으로 표시합니다.
  - 구구단은 오른쪽으로 나열되도록 합니다.
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {/* 여기에 JSX를 활용하여 요구사항에 맞는 구구단을 완성시켜보세요! */}
        {num.map(
          (n) =>
            // if (n === 1 || n === 5) {
            //   return null;
            // }
            n >= 2 &&
            n !== 5 && (
              <div style={{ padding: 10 }}>
                {num.map((m) => {
                  return (
                    <div style={{ color: n % 2 === 1 ? "blue" : "black" }}>
                      {n} x {m} = {n * m}
                    </div>
                  );
                })}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
