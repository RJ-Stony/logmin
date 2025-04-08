import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoIosArrowBack } from "react-icons/io";
import { isValidEmail } from "../../utils/validation";
import { EmailIcon } from "../icons";

function JWTPasswordReset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setError("이메일을 꼭 입력해주세요 !");
      return false;
    }
    if (!isValidEmail(email)) {
      setError("유효한 이메일 형식이 아니에요 !");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail()) {
      console.log("JWT 비밀번호 재설정 요청:", email);
      // TODO: API 요청 연동
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
          icon={<EmailIcon />}
          autoComplete="email"
        />
        <Button type="submit">비밀번호를 재설정할게요</Button>
      </form>
    </div>
  );
}

export default JWTPasswordReset;
