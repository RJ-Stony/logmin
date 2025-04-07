import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const MagicLinkLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSubmit = () => {
    if (!email) {
      setError("이메일을 꼭 입력해주세요 !");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("유효한 이메일 형식이 아니에요 !");
    } else {
      setError(undefined);
      alert(`Magic Link가 전송되었어요: ${email}`);
      // TODO: API 요청 추가
    }
  };

  const emailIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="form-container fade-in">
      <div className="form-group">
        <Input
          id="magic-email"
          type="email"
          label="이메일 주소"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={error}
          icon={emailIcon}
          autoComplete="email"
        />
      </div>
      <Button onClick={handleSubmit}>메일로 로그인 링크 받기</Button>
    </div>
  );
};

export default MagicLinkLogin;
