import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { IoIosArrowBack } from "react-icons/io";
import MagicLinkLogin from "./MagicLinkLogin";
import { PiMagicWandLight } from "react-icons/pi";
import OTPLogin from "./OTPLogin";
import { TbPasswordMobilePhone } from "react-icons/tb";
import BiometricLogin from "./BiometricLogin";
import { TbFingerprintScan } from "react-icons/tb";

const PasswordlessLogin: React.FC = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<"magic" | "otp" | "biometric">("magic");

  const backIcon = <IoIosArrowBack />;

  return (
    <div className="session-login">
      <div className="login-header">
        <Button variant="back" onClick={() => navigate("/")} icon={backIcon} />
        <h2>Passwordless</h2>
      </div>

      <div className="tab-buttons">
        <Button
          className={`tab-button ${method === "magic" ? "active" : ""}`}
          onClick={() => setMethod("magic")}
        >
          <PiMagicWandLight size="32" strokeWidth={0.5} />
        </Button>
        <Button
          className={`tab-button ${method === "otp" ? "active" : ""}`}
          onClick={() => setMethod("otp")}
        >
          <TbPasswordMobilePhone size="35" strokeWidth={1.1} />
        </Button>
        <Button
          className={`tab-button ${method === "biometric" ? "active" : ""}`}
          onClick={() => setMethod("biometric")}
        >
          <TbFingerprintScan size="40" strokeWidth={1.3} />
        </Button>
      </div>

      <div className="method-content fade-in" style={{ marginTop: "0.7rem" }}>
        {method === "magic" && <MagicLinkLogin />}
        {method === "otp" && <OTPLogin />}
        {method === "biometric" && <BiometricLogin />}
      </div>
    </div>
  );
};

export default PasswordlessLogin;
