import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoIosArrowBack } from "react-icons/io";

const JWTPasswordReset: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setError("이메일을 입력해주세요");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("유효한 이메일 형식이 아니에요");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail()) {
      // TODO: 실제 API 요청 연동 필요
      console.log("JWT 비밀번호 재설정 요청:", email);
    }
  };

  const emailIcon = (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      />
    </svg>
  );

  return (
    <div className="jwt-login">
      <div className="login-header">
        <Button
          variant="back"
          onClick={() => navigate("/jwt")}
          icon={<IoIosArrowBack />}
        />
        <h2>비밀번호 찾기</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          id="jwt-reset-email"
          type="email"
          label="이메일"
          placeholder="가입했던 이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={error || undefined}
          icon={emailIcon}
          autoComplete="email"
        />
        <Button type="submit">비밀번호를 재설정할게요</Button>
      </form>
    </div>
  );
};

export default JWTPasswordReset;
