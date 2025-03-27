import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SessionLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 세션 로그인 API 연동 구현
    console.log("세션 로그인 제출:", { email, password });
  };

  return (
    <div className="session-login">
      <div
        className="login-header"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            background: "white",
            fontWeight: "bold",
          }}
        >
          ←
        </button>
        <h2 style={{ margin: 0 }}>세션 로그인</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="session-email">이메일</label>
        <input
          id="session-email"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="session-password">비밀번호</label>
        <input
          id="session-password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" style={{ fontWeight: "bold" }}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default SessionLogin;
