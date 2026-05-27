import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/account");
  };

  return (
    <MobileContainer>
      <div className="register-page">

        <div>

          <h1>
            Create your
            <br />
            PopX account
          </h1>

          <InputField
            label="Full Name*"
            placeholder="Marry Doe"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <InputField
            label="Phone number*"
            placeholder="9876543210"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <InputField
            label="Email address*"
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            label="Password*"
            placeholder="Enter password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <InputField
            label="Company name"
            placeholder="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <div className="radio-group">

            <p>Are you an Agency?*</p>

            <div className="radio-options">

              <label>
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                />
                No
              </label>

            </div>

          </div>

        </div>

        <Button
          text="Create Account"
          className="primary-btn"
          onClick={handleSubmit}
        />

      </div>
    </MobileContainer>
  );
}

export default Register;