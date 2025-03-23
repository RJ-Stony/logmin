import React, { useState } from "react";

const JWTLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: JWT 로그인 API 연동 구현
    console.log("JWT 로그인 제출:", { username, password });
  };

  return (
    <div className="jwt-login">
      <h2>JWT 로그인</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="jwt-username">사용자 이름</label>
        <input
          id="jwt-username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="jwt-password">비밀번호</label>
        <input
          id="jwt-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default JWTLogin;
