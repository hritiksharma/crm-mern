import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login";
import { ResetPassword } from "../../components/passwordReset/PasswordReset";
import "./entryStyle.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [frmload, setFrmload] = useState("reset");
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

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        {frmload === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            email={email}
            pass={password}
            handleOnSubmit={handleOnSubmit}
          />
        )}
        {frmload === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            email={email}
            handleOnSubmit={handleOnSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
