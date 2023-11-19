import React from "react";
import { NavLink } from "react-router-dom";

const Plan = () => {
  return (
    <div className="personal-info">
      <h1>Select your plan</h1>
      <p>you have the option of monthly or yearly billing.</p>
      <div className="select-divs"></div>
      <NavLink to="example">
        <button>go to example</button>
      </NavLink>
    </div>
  );
};

export default Plan;
