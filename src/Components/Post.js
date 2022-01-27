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
      "https://api.nasa.gov/planetary/apod?api_key=c9eaIuphyvef2uqcF22CNmwUtti8GQD0brMz1yEp&count=15";
    // const response = await fetch(url);
    // const data = await response.json();
    fetch(url).then((response) => {
      if (response.ok) {
        const data = response.json();
        console.log(data);
        this.setState({
          Data: data,
          loading: false,
        });
      } else {
        this.setState({
          Data: ["Error"],
        });
        console.log(response);
        throw new Error("Error in API Fetch");
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.loading || !this.state.Data ? (
          // Loading Page while Data is retrieved from API

          <div className="loader-wrapper">
            <div className="loader"> </div>
            {this.state.Data[0] === "Error" ? (
              <h3>Seems like an error from the API call, Please Refresh </h3>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="Card-container">
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
                  <div>{APOD.date}</div>
                  <br></br>

                  <div>{APOD.explanation}</div>
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
