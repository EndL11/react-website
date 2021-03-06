import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolioItems = [
  {
    title: "Threads",
    subtitle: "Illustration",
    image: "img/portfolio/01-thumbnail.jpg",
  },
  {
    title: "Explore",
    subtitle: "Graphic Design",
    image: "img/portfolio/02-thumbnail.jpg",
  },
  {
    title: "Finish",
    subtitle: "Identity",
    image: "img/portfolio/03-thumbnail.jpg",
  },
  {
    title: "Lines",
    subtitle: "Branding",
    image: "img/portfolio/04-thumbnail.jpg",
  },
  {
    title: "Southwest",
    subtitle: "Website Design",
    image: "img/portfolio/05-thumbnail.jpg",
  },
  {
    title: "Window",
    subtitle: "Photography",
    image: "img/portfolio/06-thumbnail.jpg",
  },
];

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            {portfolioItems.map((item, index) => {
              return <PortfolioItem {...item} key={index.toString()} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
