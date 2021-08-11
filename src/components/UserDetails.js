/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import "./UserDetails.css";
export default function UserDetails() {
  const location = useLocation();
  const [quotes, setQuotes] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get("https://breakingbadapi.com/api/quotes").then((res) => {
      setQuotes(res.data.filter((item) => item.author === location.state.name));
    });
  }, []);
  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <div className="user-container">
      <div className="w3-card-4 w3-white w3-padding-large w3-display-container ">
        <div className="w3-padding w3-display-topright">
          <button
            className="w3-btn  w3-large w3-hover-teal "
            onClick={handleClick}
          >
            &lt; Home
          </button>
        </div>
        <div className="w3-row">
          <div className="w3-third">
            <img
              className="user-img"
              src={location.state.img}
              alt="user image"
            />
          </div>
          <div className="w3-half right w3-large">
            <h1 className=" w3-text-teal">{location.state.name}</h1>
            <div className="w3-padding">
              <div className="w3-row top ">
                <span className="w3-half w3-large ">
                  DOB : {location.state.birthday}
                </span>
                <span className="w3-rest w3-large">
                  {location.state.status === "Alive" ? (
                    <div className="w3-text-teal">
                      <li>Alive</li>
                    </div>
                  ) : (
                    <div className="w3-text-red">
                      <li>{location.state.status}</li>
                    </div>
                  )}
                </span>
              </div>

              <p className="w3-large">
                Occupation : {location.state.occupation.toString()}
              </p>
              <p>Status : {location.state.status}</p>
              <p>Nickname : {location.state.nickname}</p>
              <p>Portrayed by : {location.state.portrayed}</p>
              <p>Seasons:{location.state.appearance.toString()}</p>
            </div>
          </div>
        </div>
        {quotes.length ? (
          <div>
            <h1 className="w3-xxlarge w3-text-teal">Famous dailogues:</h1>
            <ol>
              {quotes.map((item) => (
                <li className="w3-h3" key={item.quote_id}>
                  {item.quote}
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
