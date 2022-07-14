import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;

    onNewValue(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type={"text"}
        placeholder=" Buscar gift "
        value={inputValue}
        onChange={onInputValue}
      />
    </form>
  );
};
