import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?:
    | "default"
    | "back"
    | "outline"
    | "text"
    | "google"
    | "kakao"
    | "github"
    | "naver";
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const baseStyles: Record<string, React.CSSProperties> = {
  default: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: 600,
    padding: "0.75rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
  },
  back: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: "0",
    borderRadius: "0",
    width: "auto",
    height: "auto",
    cursor: "pointer",
  },
};

const variantStyles: Record<string, React.CSSProperties> = {
  outline: {
    backgroundColor: "transparent",
    color: "var(--primary-color)",
    border: "1px solid var(--primary-color)",
  },
  text: {
    backgroundColor: "transparent",
    color: "var(--primary-color)",
    padding: "0.5rem 0.75rem",
  },
  google: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "1px solid #ddd",
  },
  kakao: {
    backgroundColor: "#FEE500",
    color: "#000000",
  },
  github: {
    backgroundColor: "#24292F",
    color: "#FFFFFF",
  },
  naver: {
    backgroundColor: "#03C75A",
    color: "#FFFFFF",
  },
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "default",
  style,
  className = "",
  disabled = false,
  icon,
}: ButtonProps) => {
  const combinedStyle = {
    ...baseStyles[variant === "back" ? "back" : "default"],
    ...(variantStyles[variant] || {}),
    ...style,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={combinedStyle}
      className={`${className} ${variant} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
