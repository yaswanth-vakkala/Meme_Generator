import React from "react";
import "./Sform.css";

export default function Sform() {
  return (
    <div className="sform">
      <form className="form">
        <input className="tbox1" type="text" placeholder="Top Text"></input>
        <input className="tbox2" type="text" placeholder="Bottom Text"></input>
        <button className="sbtn" type="submit">
          Get a new meme image
        </button>
      </form>
    </div>
  );
}
