import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login";
import { ResetPassword } from "../../components/passwordReset/PasswordReset";
import "./entryStyle.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [frmload, setFrmload] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setpassword(value);
        break;

      default:
        break;
    }
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the credentials");
    }
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Fill up all the credentials");
    }
  };

  const formSwitcher = (frmType) => {
    setFrmload(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        {frmload === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            email={email}
            pass={password}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          />
        )}
        {frmload === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            email={email}
            formSwitcher={formSwitcher}
            handleOnResetSubmit={handleOnResetSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
