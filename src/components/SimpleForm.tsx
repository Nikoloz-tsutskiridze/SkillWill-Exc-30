import React, { useState } from "react";

const SimpleForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <p>{inputValue}</p>
    </form>
  );
};

export default SimpleForm;
