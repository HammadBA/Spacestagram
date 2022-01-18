import React, { Component } from "react";
import "./Styles/App.css";
import { Post } from "./Components/Post.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
