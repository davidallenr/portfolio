import React from "react";

const ColorModeSlider = ({toggleTheme, currentTheme}) => {
  console.log("Theme", currentTheme);
  return (
    <React.Fragment>
      <div className="slider">
        <input type="checkbox" id="hide-checkbox" />
        <label htmlFor="hide-checkbox" onClick={toggleTheme} className="toggle">
          <span className="toggle-button">
            {[...Array(7)].map((v,i) => {
              return <span key={"crater" + i} className={"crater crater-" + i} ></span>
            })}
          </span>
          {[...Array(7)].map((v,i) => {
              return <span key={"star" + i} className={"star star-" + i} ></span>
            })}
        </label>
      </div>
    </React.Fragment>
  );
}

export default ColorModeSlider;