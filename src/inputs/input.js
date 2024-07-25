import React from "react";
import "./input.css";

export default function Input({ value, onChange }) {
  return (
    <input
      type="text"
      className="custom-input"
      value={value}
      onChange={onChange}
    />
  );
}
