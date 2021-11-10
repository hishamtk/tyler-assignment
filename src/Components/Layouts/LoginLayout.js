import React from "react";
import Landscape from "../../Assets/landscape.svg";

function LoginLayout() {
  return (
    <>
      <div className="main-container">
        <div className="login-container">
          <div className="heading-container">
            <div className="circle-div">
              <img src={Landscape} alt="Landscape Logo" />
            </div>
            <h4>LOG IN</h4>
          </div>
          <div>
            <form className="form-div">
              <div className="input-container">
                <i className="fas fa-user-alt fa-sm"></i>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="input-container">
                <i class="fas fa-lock fa-sm"></i>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <label className="label-class" htmlFor="rememberme">
                <input type="checkbox" value="isRemeberMe" id="remeberme" />{" "}
                Remember me
              </label>

              <button type="submit" className="form-button">
                Login
              </button>
            </form>
          </div>
          <div>
            <p className="forgot-par">Forgot Password</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginLayout;
