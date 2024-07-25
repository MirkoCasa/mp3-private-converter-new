import { useState } from "react";
import './input.css';

export default function Input() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      className="custom-input"
      value={value}
      onChange={handleChange}
    />
  );
}
