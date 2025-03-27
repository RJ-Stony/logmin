import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";

const CookieLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 쿠키 로그인 API 연동 구현
    console.log("쿠키 로그인 제출:", { username, password });
  };

  return (
    <div className="cookie-login">
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
        <h2>쿠키 로그인</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          id="cookie-username"
          type="text"
          label="사용자 이름"
          placeholder="사용자 이름을 입력하세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <Input
          id="cookie-password"
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

export default CookieLogin;
