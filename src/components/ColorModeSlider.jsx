import React from "react";

const ColorModeSlider = ({toggleTheme, currentTheme}) => {
  return (
    <React.Fragment>
      <div className="slider">
        <input type="checkbox" id="hide-checkbox" />
        <label htmlFor="hide-checkbox" onClick={toggleTheme} className="toggle">
          <span className="toggle-button">
            {[...Array(7)].map((v,i) => {
              return <span key={"crater" + i} className={"crater crater-" + (i + 1)} ></span>
            })}
          </span>
          {[...Array(7)].map((v,i) => {
              return <span key={"star" + i} className={"star star-" + (i + 1)} ></span>
            })}
        </label>
      </div>
    </React.Fragment>
  );
}

export default ColorModeSlider;