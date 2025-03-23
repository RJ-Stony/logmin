import React, { useState } from "react";

const SessionLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 세션 로그인 API 연동 구현
    console.log("세션 로그인 제출:", { email, password });
  };

  return (
    <div className="session-login">
      <h2>세션 로그인</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="session-email">이메일</label>
        <input
          id="session-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="session-password">비밀번호</label>
        <input
          id="session-password"
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

export default SessionLogin;
