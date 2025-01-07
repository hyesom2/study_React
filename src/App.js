import { useCallback } from "react";

export default function App() {
  /* 
    ※ 합성 이벤트 (SyntheticEvent)
    - React에서 이벤트가 발생할 때, 이벤트 핸들러의 인자로 합성 이벤트 객체가 전달된다.
    - 이 합성 이벤트는 JavaScript에서 전달 받는 이벤트 객체를 확장(래핑)한 객체이다.(거의 동일한 인터페이스를 가지고 있음)
    - 원본 이벤트 객체(native event)는 syntheticEvent.nativeEvent에 있다.
    - 지금은 그냥 같은 이벤트 객체라고 생각하자.
  */
  function handleClick1(e) {
    console.log("click1", e);
  }

  function handleClick2() {
    console.log("click2");
  }

  /* 
    ※ 이벤트 핸들러(함수)를 만들 때는 react lifecycle을 고려하자.
    - 컴포넌트가 리렌더링 되면 컴포넌트 내에서 단순 정의한 함수가 새로운 함수로 만들어진다.
    - 이것은 불필요한 작업으로 성능 문제를 야기한다.
    - 함수의 정의를 최대한 컴포넌트 밖으로 빼거나, useCallback으로 감싸줘서 매 렌더링 마다 새로 만들어지지 않도록 해준다.
  */
  const handleChange = useCallback((e) => {
    console.log("change", e.target.value);
  }, []);

  return (
    <div>
      <button onClick={handleClick1}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
    </div>
  );
}
