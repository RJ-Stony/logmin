import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoIosArrowBack } from "react-icons/io";

const JWTSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: typeof errors = {};
    let isValid = true;

    if (!email) {
      newErrors.email = "이메일을 꼭 입력해주세요 !";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "유효한 이메일 형식이 아니에요 !";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "비밀번호를 꼭 입력해주세요 !";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "비밀번호는 최소 6자 이상이어야 해요 !";
      isValid = false;
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않아요 !";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: API 연동 시 여기에 백엔드 요청 추가
      console.log("JWT 회원가입 제출:", { email, password });
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

  const passwordIcon = (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M18 8h-1V6a5 5 0 0 0-10 0v2H6c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2Zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2Z"
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
        <h2>JWT Sign Up</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          id="jwt-signup-email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={errors.email}
          icon={emailIcon}
          autoComplete="email"
        />
        <Input
          id="jwt-signup-password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={errors.password}
          icon={passwordIcon}
          autoComplete="new-password"
        />
        <Input
          id="jwt-signup-confirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 확인할게요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          error={errors.confirmPassword}
          icon={passwordIcon}
          autoComplete="new-password"
        />
        <Button type="submit">회원가입</Button>
      </form>
    </div>
  );
};

export default JWTSignup;
