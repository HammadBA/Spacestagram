import React, { Component } from "react";
import "../Styles/Header.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div className="Title">
            <h1> Spacestegram</h1>
            <div className="PlanetDiv"></div>
          </div>

          <h3>Built by NASA APOD API</h3>
        </div>
      </div>
    );
  }
}
