import React, { Component } from "react";
import { LikeButton } from "./LikeButton.js";
import { Header } from "./Header.js";
import "../Styles/Header.css";

export class Post extends Component {
  state = {
    loading: true,
    Data: [],
    Emoji: [
      "🌌",
      "🛰",
      "🚀",
      "🛸",
      "🪐",
      "🔭",
      "🌑",
      "☄️",
      "🌙",
      "🌕",
      "🌍",
      "🌠",
      "💫",
      "🌟",
    ],
  };

  async componentDidMount() {
    const url =
      "https://api.nasa.gov/planetary/apod?api_key=o7v4FPFjToHzk0gmlVVcV1K5yHTdfhhw5EokzFoO&count=15";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      Data: data,
      loading: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.Data ? (
          // Loading Page while Data is retrieved from API

          <div className="loader-wrapper">
            <div className="loader"> </div>
          </div>
        ) : (
          <div className="Card-container">
            <Header />

            {/* NASA API DATA Display */}
            {this.state.Data.map((APOD, i) => (
              <div
                className="Card"
                key={APOD.date}
                style={{
                  flexDirection: i % 2 === 1 ? "row-reverse" : "row",
                }}
              >
                <div className="Details">
                  <div style={{ fontSize: 35 }}>
                    {APOD.title}
                    {
                      this.state.Emoji[
                        Math.floor(Math.random() * this.state.Emoji.length)
                      ]
                    }
                  </div>
                  <div>
                    {APOD.date}
                    {APOD.explanation}
                  </div>
                  <div></div>
                  <LikeButton initialCount={Math.floor(Math.random() * 100)} />
                </div>

                <div className="Img-container">
                  {APOD.hdurl ? (
                    <img src={APOD.hdurl} className="image" alt=""></img>
                  ) : (
                    (console.log("No HDURL"),
                    (
                      <iframe
                        className="image"
                        src={APOD.url}
                        title={APOD.url}
                      ></iframe>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
