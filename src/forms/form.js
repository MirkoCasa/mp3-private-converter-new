import React from "react";
import Input from "../inputs/input";
import "./form.css";
import Button from "../buttons/button";
import { convert } from "../services/service";
import Preview from "../previews/preview";

export default function Form() {
  const [inputValue, setInputValue] = React.useState("");
  const [videoInfo, setVideoInfo] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await convert(inputValue);
      if (data) {
        setVideoInfo(data);
      } else {
        setError("No data returned.");
      }
    } catch (e) {
      setError("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="custom-form">
      <Input value={inputValue} onChange={handleInputChange} />
      <Button text={"CONVERT"} onClick={handleButtonClick} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {videoInfo && (
        <Preview videoInfo={videoInfo} />
      )}
    </div>
  );
}
