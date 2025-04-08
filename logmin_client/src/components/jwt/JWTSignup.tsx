import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoIosArrowBack } from "react-icons/io";
import { isValidEmail } from "../../utils/validation";
import { EmailIcon, PasswordIcon } from "../icons";

function JWTSignup() {
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

    if (!email) newErrors.email = "이메일을 꼭 입력해주세요 !";
    else if (!isValidEmail(email))
      newErrors.email = "유효한 이메일 형식이 아니에요 !";

    if (!password) newErrors.password = "비밀번호를 꼭 입력해주세요 !";
    else if (password.length < 6)
      newErrors.password = "비밀번호는 최소 6자 이상이어야 해요 !";

    if (confirmPassword !== password)
      newErrors.confirmPassword = "비밀번호가 일치하지 않아요 !";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("JWT 회원가입 제출:", { email, password });
      // TODO: 백엔드 API 연동
    }
  };

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
          icon={<EmailIcon />}
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
          icon={<PasswordIcon />}
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
          icon={<PasswordIcon />}
          autoComplete="new-password"
        />
        <Button type="submit">회원가입</Button>
      </form>
    </div>
  );
}

export default JWTSignup;
