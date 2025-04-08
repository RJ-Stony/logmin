import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoIosArrowBack } from "react-icons/io";
import { isValidEmail } from "../../utils/validation";
import { EmailIcon } from "../icons";

function SessionPasswordReset() {
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
      console.log("비밀번호 재설정 이메일 전송:", email);
      // TODO: 백엔드 API 호출
    }
  };

  return (
    <div className="session-login">
      <div className="login-header">
        <Button
          variant="back"
          onClick={() => navigate("/session")}
          icon={<IoIosArrowBack />}
        />
        <h2>비밀번호 찾기</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          id="reset-email"
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

export default SessionPasswordReset;
