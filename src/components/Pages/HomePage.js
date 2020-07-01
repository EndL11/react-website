import React from "react";

import Header from "../Header";
import Services from "../Services";
import About from "../About";
import Team from "../Team";
import Portfolio from "../Portfolio";
import ContactPage from "./ContactPage";


export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <ContactPage />
      </>
    );
  }
}
