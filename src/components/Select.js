import { useState } from "react";

export default function Select() {
  const [value, setValue] = useState("");
  console.log("[Select] render", value);

  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value="react">React</option>
      <option value="vue">Vue</option>
      <option value="angular">Angular</option>
      <option value="svelte">Svelte</option>
    </select>
  );
}
