import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JWTLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: JWT 로그인 API 연동 구현
    console.log("JWT 로그인 제출:", { username, password });
  };

  return (
    <div className="jwt-login">
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
          style={{ background: "white", fontWeight: "bold" }}
        >
          ←
        </button>
        <h2 style={{ margin: 0 }}>JWT 로그인</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="jwt-username">사용자 이름</label>
        <input
          id="jwt-username"
          type="text"
          placeholder="사용자 이름을 입력하세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="jwt-password">비밀번호</label>
        <input
          id="jwt-password"
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

export default JWTLogin;
