import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

const PersonalInfo = () => {
  const { auth, filled } = useAuth();
  const [personalInfo, setPersonalInfo] = useLocalStorage("personal", {
    name: "",
    email: "",
    phone: "",
  });

  const [isFilled, setIsFilled] = useState({
    name: true,
    email: true,
    phone: true,
  });

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (personalInfo.name && personalInfo.email && personalInfo.phone) {
      filled();
      navigate("plan");
      setIsFilled({ name: true, email: true, phone: true });
    } else {
      setIsFilled({ name: false, email: false, phone: false });
    }
    return false;
  };

  useEffect(() => {}, []);

  console.log(isFilled);
  const addInLocalStorage = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    if (id == "name") {
      setPersonalInfo((prevValue) => ({ ...prevValue, name: value }));
    } else if (id == "email") {
      setPersonalInfo((prevValue) => ({ ...prevValue, email: value }));
    } else if (id === "phone") {
      setPersonalInfo((prevValue) => ({ ...prevValue, phone: value }));
    }
  };

  return (
    <main className="personal-info">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address and phone number. </p>
      <section className="form">
        <form>
          <label
            htmlFor="name"
            className={isFilled.name ? "" : "invalid-label"}
          >
            Name
          </label>
          <input
            className={isFilled.name ? "" : "invalid-input"}
            type="text"
            value={personalInfo.name}
            id="name"
            placeholder="e.g Stephen King"
            required
            onChange={addInLocalStorage}
          />

          <label
            htmlFor="email"
            className={isFilled.email ? "" : "invalid-label"}
          >
            Email Address
          </label>
          <input
            type="email"
            className={isFilled.email ? "" : "invalid-input"}
            id="email"
            value={personalInfo.email}
            placeholder="e.g stephenking@lorem.com"
            required
            onChange={addInLocalStorage}
          />

          <label
            htmlFor="phone"
            className={isFilled.phone ? "" : "invalid-label"}
          >
            Phone Number
          </label>
          <input
            type="number"
            className={isFilled.phone ? "" : "invalid-input"}
            id="phone"
            value={personalInfo.phone}
            placeholder="e.g +1 234 567 890"
            required
            onChange={addInLocalStorage}
          />

          {/* <label htmlFor="submit"></label> */}

          {/* {auth ? (
            <button type="submit" className="btn" onClick={handleClick}>
              Next Step
            </button>
          ) : (
            <button type="submit" className="btn invalid" onClick={handleClick}>
              Next Step
            </button>
          )} */}
          <button type="submit" className="btn" onClick={handleClick}>
            Next Step
          </button>
        </form>
      </section>
    </main>
  );
};

export default PersonalInfo;
