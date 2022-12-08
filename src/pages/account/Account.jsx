import React from "react";
import "./account.css";

const Account = () => {
  return (
    <section className="accountInfo">
      <div className="container boxItems">
        <h1>Account Information</h1>
        <div className="content">
          <div className="left">
            <div className="img flexCenter">
              <label htmlFor="inputfile">
                {" "}
                <img
                  src="https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647__340.jpg"
                  alt=""
                />
              </label>
              <input type="file" id="inputfile" style={{ display: "none" }} />
            </div>
          </div>
          <form className="right">
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button className="button" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Account;
