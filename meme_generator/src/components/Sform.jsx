import React, { useState } from "react";
import "./Sform.css";
import MemesData from "../MemesData";

export default function Sform() {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemesData, setAllMemesData] = useState(MemesData);

  function handleClick() {
    const url =
      allMemesData.data.memes[
        Math.floor(Math.random() * allMemesData.data.memes.length)
      ].url;
    setMemeImage((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  }
  return (
    <div className="sform">
      <div className="form">
        <input className="tbox1" type="text" placeholder="Top Text"></input>
        <input className="tbox2" type="text" placeholder="Bottom Text"></input>
        <button onClick={handleClick} className="sbtn" type="submit">
          Get a new meme image
        </button>
      </div>
      <div className="mImage">
        <img src={memeImage.randomImage}></img>
      </div>
    </div>
  );
}
