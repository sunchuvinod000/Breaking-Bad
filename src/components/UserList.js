import React from "react";
import { useHistory } from "react-router-dom";
import "./UserList.css";
export default function UserList({
  id,
  name,
  birthday,
  occupation,
  img,
  status,
  nickname,
  appearance,
  portrayed,
  category,
}) {
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: `/UserDetails/${id}`,
      state: {
        id,
        name,
        birthday,
        occupation,
        img,
        status,
        nickname,
        appearance,
        portrayed,
        category,
      },
    });
  };
  return (
    <div
      className="w3-col l5 w3-padding space w3-border w3-border-black w3-hover-shadow div"
      onClick={handleClick}
    >
      <div className="w3-row">
        <div className="w3-third">
          <img className="w3-image img" src={img} alt={name + " image"} />
        </div>
        <div className="w3-twothird">
          <p className="w3-xxlarge w3-text-teal ">{name}</p>
          <span className="w3-large top">{occupation.toString()}</span>
          <div className="w3-row top">
            <span className="w3-half w3-large">DOB: {birthday}</span>
            <span className="w3-rest w3-large">
              {status === "Alive" ? (
                <div className="w3-text-teal">
                  <li>Alive</li>
                </div>
              ) : (
                <div className="w3-text-red">{status}</div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
