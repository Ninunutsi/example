import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="main-container">
      <div className="control-panel">
        <div className="steps">
          <div className="steps-num active">1</div>
          <div className="steps-texts">
            <p className="step">STEP 1</p>
            <p className="text">YOUR INFO</p>
          </div>
        </div>

        <div className="steps">
          <div className="steps-num">2</div>
          <div className="steps-texts">
            <p className="step">STEP 2</p>
            <p className="text">select plan</p>
          </div>
        </div>

        <div className="steps">
          <div className="steps-num">3</div>
          <div className="steps-texts">
            <p className="step">STEP 3</p>
            <p className="text">Add-ons</p>
          </div>
        </div>

        <div className="steps">
          <div className="steps-num">4</div>
          <div className="steps-texts">
            <p className="step">STEP 4</p>
            <p className="text">Summary</p>
          </div>
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
