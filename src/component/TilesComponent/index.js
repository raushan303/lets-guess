import React, { useState, useEffect } from "react";

import "./index.css";

function Index() {
  const [value, setValue] = useState(null);
  const [showTiles, setShowTiles] = useState(false);

  const [visibleTiles, setVisibleTiles] = useState([]);
  const [tilesList, setTilesList] = useState([]);

  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const tileNumbergenerator = () => {
    const tempTilesList = [];
    while (tempTilesList.length < 9) {
      const randomNumber = Math.floor(Math.random() * 100 + 1);
      if (value === randomNumber || tempTilesList.includes(randomNumber))
        continue;
      tempTilesList.push(randomNumber);
    }
    const randomIndex = Math.floor(Math.random() * 9);
    tempTilesList[randomIndex] = value;
    setTilesList(tempTilesList);
  };

  const onChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setValue(value);
    if (value >= 0 && errorMsg) setErrorMsg("");
  };

  const onSubmit = () => {
    if (value === 0 || value) {
      tileNumbergenerator();
      setShowTiles(true);
    } else {
      setErrorMsg("select an integer value");
    }
  };

  const onReset = () => {
    setValue(null);
    setShowTiles(false);
    setVisibleTiles([]);
    setMessage("");
  };

  const onShowClick = (index) => {
    setVisibleTiles((prevState) => [...prevState, index]);
  };

  useEffect(() => {
    if (visibleTiles.length <= 3) {
      let isWin = false;
      visibleTiles.forEach((index) => {
        if (tilesList[index] === value) isWin = true;
      });
      if (isWin) setMessage("Hurray! You won the game");
      else if (visibleTiles.length === 3 && !isWin)
        setMessage("You loose better luck next time");
    }
  }, [visibleTiles]);

  if (!showTiles)
    return (
      <div className="outer-container">
        <h2 className="title">Select a number</h2>
        <input className="input-box" onChange={onChange} autoFocus/>
        <h3 className="error-message">{errorMsg}</h3>
        <button className="btn" onClick={onSubmit}>
          submit
        </button>
      </div>
    );
  return (
    <div className="outer-container">
      <div>
        {message ? (
          <div className="status">
            <h3 className="error-message">{message}</h3>
            <button className="btn" onClick={onReset}>
              Tap here to play
            </button>
          </div>
        ) : null}
        <div className="tile-grid">
          {tilesList.map((number, index) => {
            if (visibleTiles.includes(index))
              return (
                <div className="tile-box" key={index}>
                  {number}
                </div>
              );
            else
              return (
                <div className="tile-box" key={index}>
                  <button
                    onClick={() => onShowClick(index)}
                    className="tile-btn"
                  >
                    show tile
                  </button>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
