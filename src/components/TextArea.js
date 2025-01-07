import { useState } from "react";

export default function TextArea() {
  const [value, setValue] = useState("");
  console.log("[TextArea] render", value);

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
