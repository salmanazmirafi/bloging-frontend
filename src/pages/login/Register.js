import React from "react";
import "./login.css";

const Register = () => {
  return (
    <section className="login">
      <div className="">
        <div className="backImg">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/29/07/11/flower-3115353__340.jpg"
            alt=""
          />
          <div className="text">
            <h3>Register</h3>
            <h1>My account</h1>
          </div>
        </div>

        <form>
          <span>Username *</span>
          <input type="text" required />
          <span>Email address *</span>
          <input type="email" required />
          <span>Password *</span>
          <input type="password" required />
          <button type="submit" className="button">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
