import { useState } from "react";

export default function CheckBox() {
  const [value, setValue] = useState(false);
  console.log("[Checkbox] render", value);

  return (
    <input
      type="checkbox"
      value={value}
      onChange={(e) => {
        setValue(e.target.checked);
      }}
    />
  );
}
