import { useRef } from "react";

export default function UnControlledTextInput() {
  const inputRef = useRef();
  console.log("[UnControlledTextInput] render");

  return (
    <div>
      <input type="text" ref={inputRef} id="input" />
      <button
        type="button"
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Get Value
      </button>
    </div>
  );
}
