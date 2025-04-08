import React from "react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  let title = "에러가 발생했어요!";
  let message = "잠시 후 다시 시도해 주세요.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} - ${error.statusText}`;
    if (error.status === 404) {
      message = "요청하신 페이지를 찾을 수 없어요.";
    }
  }

  return (
    <div className="layout">
      <header>
        <h1>Logmin</h1>
      </header>
      <main>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>⚠️</div>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h2>
          <p
            style={{ color: "#6e7991", fontSize: "1rem", marginBottom: "2rem" }}
          >
            {message}
          </p>
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#4a6cfa",
              color: "white",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(74, 108, 250, 0.3)",
              transition: "all 0.2s ease",
            }}
          >
            홈으로 돌아가기
          </button>
        </div>
      </main>
      <footer>
        <p>© {currentYear} Logmin</p>
      </footer>
    </div>
  );
};

export default ErrorPage;
