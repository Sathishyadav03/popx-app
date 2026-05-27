import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import Button from "../components/Button";

function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="welcome-page">

        <div>
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="welcome-buttons">

          <Button
            text="Create Account"
            className="primary-btn"
            onClick={() => navigate("/register")}
          />

          <Button
            text="Already Registered? Login"
            className="secondary-btn"
            onClick={() => navigate("/login")}
          />

        </div>
      </div>
    </MobileContainer>
  );
}

export default Welcome;