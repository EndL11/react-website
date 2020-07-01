import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PageWrapper from "./components/PageWrapper";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </PageWrapper>
    </Router>
  );
}

export default App;
