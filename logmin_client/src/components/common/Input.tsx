import React from "react";

interface InputProps {
  id: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  label,
  required = false,
}) => {
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
      />
    </div>
  );
};

export default Input;
