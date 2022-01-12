import React, { Component } from "react";
import "./Styles/App.css";
import { Post } from "./components/Post.js";

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
