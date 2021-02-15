import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import App from "./App";
import Gallery from "./Gallery";
import Lessons from "./Lessons";
import Lesson from "./Lesson";
import { lesson_one, lesson_two, lesson_three } from "./data/markdown";

import "./index.css";

const Index = () => (
  <div className="main">
    <BrowserRouter>
      <Header />
      <div>
        <Route exact path="/" component={App} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/hall-of-fame" component={Gallery} />
        <Route path="/lesson-one">
          <Lesson lesson={lesson_one} />
        </Route>
        <Route path="/lesson-two">
          <Lesson lesson={lesson_two} />
        </Route>
        <Route path="/lesson-three">
          <Lesson lesson={lesson_three} />
        </Route>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
