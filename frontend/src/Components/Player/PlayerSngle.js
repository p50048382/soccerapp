import React from "react";
const PlayerSingle = (props) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img height="300px" width="200px" src="OIP.jpg" />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone: {props.player.phone} Email: {props.player.email}
            </p>
            <p>
              Strength: {props.player.strength} Endurance:{" "}
              {props.player.endurance}
            </p>
          </div>
          <div className="card-action">
            <a href="#">{props.player.team}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
