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

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "default",
  style,
  className = "",
  disabled = false,
  icon,
}) => {
  const baseStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: 600,
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "back":
        return {
          backgroundColor: "var(--surface-color)",
          color: "var(--text-color)",
          padding: "0.75rem",
          borderRadius: "50%",
          height: "36px",
          width: "36px",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "var(--primary-color)",
          border: "1px solid var(--primary-color)",
        };
      case "text":
        return {
          backgroundColor: "transparent",
          color: "var(--primary-color)",
          padding: "0.5rem 0.75rem",
        };
      case "google":
        return {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          border: "1px solid #ddd",
        };
      case "kakao":
        return {
          backgroundColor: "#FEE500",
          color: "#000000",
        };
      case "github":
        return {
          backgroundColor: "#24292F",
          color: "#FFFFFF",
        };
      case "naver":
        return {
          backgroundColor: "#03C75A",
          color: "#FFFFFF",
        };
      default:
        return {};
    }
  };

  const buttonClassName = `${className} ${variant} ${
    disabled ? "disabled" : ""
  }`;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyles, ...getVariantStyles(), ...style }}
      className={buttonClassName}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
