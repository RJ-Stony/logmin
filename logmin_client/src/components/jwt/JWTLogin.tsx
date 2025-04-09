import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoIosArrowBack } from "react-icons/io";
import { isValidEmail, isValidPassword } from "../../utils/validation";
import { EmailIcon, PasswordIcon } from "../icons";
import { jwtLogin } from "../../api/jwt";

function JWTLogin() {
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
    else if (!isValidPassword(password))
      newErrors.password = "최소 6자 이상이어야 해요 !";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await jwtLogin(email, password);
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      alert("로그인 성공!");
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("JWT 로그인 실패:", error.message);
        alert("로그인에 실패했어요. 다시 시도해주세요!");
      } else {
        alert("알 수 없는 오류가 발생했어요.");
      }
    }
  };

  return (
    <div className="jwt-login">
      <div className="login-header">
        <Button
          variant="back"
          onClick={() => navigate("/")}
          icon={<IoIosArrowBack />}
        />
        <h2>JWT</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          id="jwt-email"
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
          id="jwt-password"
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
        <Link to="/jwt/reset-password" className="auth-link">
          비밀번호 찾기
        </Link>
        <Link to="/jwt/signup" className="auth-link">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default JWTLogin;
