import React, { useEffect, useState } from "react";
import "./Sform.css";

export default function Sform() {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemesData, setAllMemesData] = useState("");
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemesData(data.data.memes));
  }, []);
  function handleClick() {
    const url =
      allMemesData[Math.floor(Math.random() * allMemesData.length)].url;
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
