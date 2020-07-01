import React from "react";

import Header from "../Header";
import About from "../About";
import Team from "../Team";

export default class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Team />
      </>
    );
  }
}
