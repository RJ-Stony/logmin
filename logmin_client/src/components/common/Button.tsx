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
  // ✅ variant에 따라 baseStyles를 다르게 적용
  const getBaseStyles = (): React.CSSProperties => {
    if (variant === "back") {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backgroundColor: "transparent",
        padding: "0",
        borderRadius: "0",
        width: "auto",
        height: "auto",
      };
    }

    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      fontWeight: 600,
      padding: "0.75rem 1rem",
      borderRadius: "6px",
      cursor: "pointer",
    };
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
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
      style={{ ...getBaseStyles(), ...getVariantStyles(), ...style }}
      className={buttonClassName}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
