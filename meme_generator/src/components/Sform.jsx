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

  function handleChange(e) {
    setMemeImage((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div className="sform">
      <div className="form">
        <input
          name="topText"
          className="tbox1"
          type="text"
          placeholder="Top Text"
          onChange={handleChange}
          value={memeImage.topText}
        ></input>
        <input
          name="bottomText"
          className="tbox2"
          type="text"
          placeholder="Bottom Text"
          onChange={handleChange}
          value={memeImage.bottomText}
        ></input>
        <button onClick={handleClick} className="sbtn" type="submit">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </div>
  );
}
