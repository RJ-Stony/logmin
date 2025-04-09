import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoIosArrowBack } from "react-icons/io";
import {
  isValidEmail,
  isValidPassword,
  isMatchingPasswords,
} from "../../utils/validation";
import { EmailIcon, PasswordIcon } from "../icons";
import { sessionSignup } from "../../api/session";

function SessionSignup() {
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
    else if (!isValidPassword(password))
      newErrors.password = "비밀번호는 최소 6자 이상이어야 해요 !";

    if (!isMatchingPasswords(password, confirmPassword))
      newErrors.confirmPassword = "비밀번호가 일치하지 않아요 !";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await sessionSignup(email, password);
        alert("회원가입 성공! 로그인 해주세요 🙌🏻");
        navigate("/session");
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("회원가입 실패:", error.message);
          alert("회원가입에 실패했어요. 다시 시도해주세요!");
        } else {
          alert("알 수 없는 오류가 발생했어요.");
        }
      }
    }
  };

  return (
    <div className="session-login">
      <div className="login-header">
        <Button
          variant="back"
          onClick={() => navigate(-1)}
          icon={<IoIosArrowBack />}
        />
        <h2>Session Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          id="signup-email"
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
          id="signup-password"
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
          id="signup-confirm-password"
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

export default SessionSignup;
