import React from "react";
import { Link } from "react-router-dom";
import { blog } from "../../assets/data/data";
import "./card.css";

const Card = () => {
  return (
    <section className="blog">
      <div className="container grid3">
        {blog.map((item) => (
          <div className="box boxItems" key={item.id}>
            <div className="img">
              {" "}
              <img src={item.cover} alt="" />
            </div>
            <div className="details">
              <div className="tag">{item.category}</div>
              <Link to="/">
                <h3>{item.title}</h3>
              </Link>
              <p>{item.desc.slice(0, 180)}...</p>
              <div className="date">
                <i className="icon fa-regular fa-clock"></i>{" "}
                <label htmlFor="">{new Date(item.date).toDateString()}</label>
                <i className="icon fa-regular fa-comment"></i>
                <label htmlFor="">27</label>
                <i className="icon fa-solid fa-share"></i>{" "}
                <label htmlFor="">SHARE</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
