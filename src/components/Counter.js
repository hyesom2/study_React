import { useState, useEffect, useCallback } from "react";

export default function Counter() {
  console.log("Render Counter!");

  /* 
    1. useState : 상태 값과 그 값을 갱신하는 함수를 반환한다.
    - 인자 : 초기 상태 값
    - 반환 : [상태변수, 상태에 대한 Setter]
  */
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   console.log("[Function] useEffect [] : 컴포넌트가 마운트 될 때, 한 번만!");

  //   return () => {
  //     console.log("[Function] useEffect return [] : 컴포넌트가 언마운트 될 때");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(
  //     "[Function] useEffect [value] : 컴포넌트가 마운트 될 때, + value가 변경되면,",
  //   );

  //   return () => {
  //     console.log(
  //       "[Function] useEffect return [value] : 새로 useEffect를 수행하기 전에,",
  //     );
  //   };
  // }, [value]);

  /* 
    3. useCallback : 메모이제이션된 콜백을 반환
    - 인자 (메모이제이션 할 함수 / 의존성 배열)
    - 반환 : 메모이제이션 된 함수
    - 의존성 배열을 제대로 셋팅하지 않으면 함수 안에서 사용되는 값이 업데이트 되지 않은 값일 수 있다.
  */
  const increaseValue = useCallback(() => {
    setValue(value + 1);
  }, [value]);
  const resetValue = useCallback(() => {
    setValue(0);
  }, []);

  return (
    <div>
      <h1>value: {value}</h1>
      <button
        type="button"
        // onClick={() => {
        // setValue(value + 1);
        // }}
        onClick={increaseValue}
      >
        Increase Button
      </button>
      <button type="button" onClick={resetValue}>
        Reset Button
      </button>
    </div>
  );
}
