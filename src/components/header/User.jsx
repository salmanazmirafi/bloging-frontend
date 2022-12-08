import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };

  return (
    <div className="profile">
      {user ? (
        <>
          <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
            <img
              src="https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647__340.jpg"
              alt=""
            />
          </button>
          {profileOpen && (

            <>
            
            <div className="openProfile boxItems" onClick={close}>
              <Link to={"/account"}>
                <div className="image">
                  <div className="img">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647__340.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h4>Albi</h4>
                    <label>Los Angeles, CA</label>
                  </div>
                </div>
              </Link>
              <Link to="/create">
                <button className="box">
                  <i className="icon fa-solid fa-plus"></i>
                  <h4>Create Post</h4>
                </button>
              </Link>

              <Link to='/account'>
              <button className="box">
                <i className="icon fa-solid fa-gear"></i>
                <h4>My Account</h4>
              </button>
              </Link>
              <button className="box">
                <i className="icon fa-solid fa-bag-shopping"></i>
                <h4>My Order</h4>
              </button>
              <button className="box">
                <i className="icon fa-solid fa-heart"></i>
                <h4>Wishlist</h4>
              </button>
              <button className="box">
                <i className="icon fa-solid fa-question"></i>
                <h4>Help</h4>
              </button>
              <button className="box">
                {user && (
                  <h4>
                    <i class="fa-solid fa-right-from-bracket"></i> Log Out
                  </h4>
                )}
              </button>
            </div>
            
           </>

           )}
        </>
      ) : (
        <Link to="/login">
          <button>My Account</button>
        </Link>
      )}
    </div>
  );
};

export default User;
