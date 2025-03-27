import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "default" | "back";
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "default",
  style,
  className = "",
}) => {
  const baseStyles: React.CSSProperties = {
    padding: variant === "back" ? "0.75rem 0.75rem 0.75rem 0" : "0.75rem",
    border: "none",
    backgroundColor: variant === "back" ? "white" : "var(--service-color)",
    color: "var(--text-color)",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const buttonClassName = `${className} ${variant}`;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyles, ...style }}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};

export default Button;
