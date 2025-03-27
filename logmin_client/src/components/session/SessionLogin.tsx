import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";

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
          marginBottom: "1rem",
        }}
      >
        <Button variant="back" onClick={() => navigate("/")}>
          ←
        </Button>
        <h2>세션 로그인</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          id="session-email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          id="session-password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">로그인</Button>
      </form>
    </div>
  );
};

export default SessionLogin;
