import React from "react";

interface InputProps {
  id: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode;
  autoComplete?: string;
}

function Input({
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  label,
  required = false,
  error,
  icon,
  autoComplete = "off",
}: InputProps) {
  const hasError = !!error;
  const hasIcon = !!icon;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <div className={`input-container ${hasError ? "has-error" : ""}`}>
        {hasIcon && <span className="input-icon">{icon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`input-field ${hasIcon ? "has-icon" : ""}`}
          autoComplete={autoComplete}
        />
      </div>
      {hasError && <p className="input-error">{error}</p>}
    </div>
  );
}

export default Input;
