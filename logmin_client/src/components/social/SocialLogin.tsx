import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import SessionSocialLogin from "./SessionSocialLogin";
import JWTSocialLogin from "./JWTSocialLogin";
import { IoIosArrowBack } from "react-icons/io";

const SocialLogin: React.FC = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<"session" | "jwt">("session");
  const backIcon = <IoIosArrowBack />;

  return (
    <div className="session-login social-login">
      <div className="login-header">
        <Button variant="back" onClick={() => navigate("/")} icon={backIcon} />
        <h2>Social</h2>
      </div>

      <div className="tab-buttons">
        <Button
          className={`tab-button ${method === "session" ? "active" : ""}`}
          onClick={() => setMethod("session")}
        >
          Session 방식
        </Button>
        <Button
          className={`tab-button ${method === "jwt" ? "active" : ""}`}
          onClick={() => setMethod("jwt")}
        >
          JWT 방식
        </Button>
      </div>

      <div key={method} className="social-login-tab-content fade-in">
        {method === "session" ? <SessionSocialLogin /> : <JWTSocialLogin />}
      </div>
    </div>
  );
};

export default SocialLogin;
