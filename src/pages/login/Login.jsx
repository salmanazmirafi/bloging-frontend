import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <section className="login">
      <div className="">
        <div className="backImg">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/29/07/11/flower-3115353__340.jpg"
            alt=""
          />
          <div className="text">
            <h3>Login</h3>
            <h1>My account</h1>
          </div>
        </div>

        <form>
          <span>Username or email address *</span>
          <input type="text" required />
          <span>Password *</span>
          <input type="password" required />
          <button className="button" type="submit">
            Log in
          </button>

          <Link to="/register" className="link">
            Register
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
