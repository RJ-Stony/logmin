import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const OTPLogin: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  // 입력값 실시간 포맷팅: 010-1234-5678
  const formatPhoneNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, ""); // 숫자만
    if (digitsOnly.length < 4) return digitsOnly;
    if (digitsOnly.length < 8)
      return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
    return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(
      3,
      7
    )}-${digitsOnly.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = () => {
    const raw = phone.replace(/\D/g, ""); // 하이픈 제거된 번호
    const phoneRegex = /^01[0|1|6-9][0-9]{7,8}$/;

    if (!raw) {
      setError("휴대폰 번호를 꼭 입력해주세요 !");
    } else if (!phoneRegex.test(raw)) {
      setError("올바른 휴대폰 번호 형식이 아니에요 !");
    } else {
      setError(undefined);
      alert(`OTP 발급이 요청되었어요: ${raw}`);
      // TODO: API 요청
    }
  };

  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
      />
    </svg>
  );

  return (
    <div className="form-container fade-in">
      <div className="form-group">
        <Input
          id="otp-phone"
          type="text"
          label="휴대폰 번호"
          placeholder="010-0000-0000"
          value={phone}
          onChange={handlePhoneChange}
          icon={phoneIcon}
          required
          error={error}
        />
      </div>
      <Button onClick={handleSubmit}>휴대폰으로 OTP 발급하기</Button>
    </div>
  );
};

export default OTPLogin;
