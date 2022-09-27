import React from "react";
import "../assets/css/style.css";

const SignIn = ({ onLogin }) => {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form>
          <label for="chk" aria-hidden="true">
            Sign up
          </label>
          <button onClick={onLogin} className="button">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <button onClick={onLogin} className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
