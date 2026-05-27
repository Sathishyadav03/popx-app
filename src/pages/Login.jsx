import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser?.email === loginData.email &&
      storedUser?.password === loginData.password
    ) {
      navigate("/account");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <MobileContainer>

      <div className="page-container">

        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <InputField
          label="Email Address"
          placeholder="Enter email address"
          name="email"
          value={loginData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />

        <Button
          text="Login"
          className="primary-btn"
          onClick={handleLogin}
        />

      </div>

    </MobileContainer>
  );
}

export default Login;