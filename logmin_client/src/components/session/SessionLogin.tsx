import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoIosArrowBack } from "react-icons/io";
import { isValidEmail } from "../../utils/validation";
import { EmailIcon, PasswordIcon } from "../icons";

function SessionLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!email) newErrors.email = "이메일을 꼭 입력해주세요 !";
    else if (!isValidEmail(email))
      newErrors.email = "유효한 이메일 형식이 아니에요 !";

    if (!password) newErrors.password = "비밀번호를 꼭 입력해주세요 !";
    else if (password.length < 6)
      newErrors.password = "최소 6자 이상이어야 해요 !";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("세션 로그인 제출:", { email, password });
      // TODO: API 연동
    }
  };

  return (
    <div className="session-login">
      <div className="login-header">
        <Button
          variant="back"
          onClick={() => navigate("/")}
          icon={<IoIosArrowBack />}
        />
        <h2>Session</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          id="session-email"
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
          id="session-password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={errors.password}
          icon={<PasswordIcon />}
          autoComplete="current-password"
        />

        <Button type="submit">로그인</Button>
      </form>

      <div className="auth-links">
        <Link to="/session/reset-password" className="auth-link">
          비밀번호 찾기
        </Link>
        <Link to="/session/signup" className="auth-link">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default SessionLogin;
