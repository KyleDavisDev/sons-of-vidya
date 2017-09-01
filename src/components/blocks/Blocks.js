import React, { Component } from "react";

class Row1 extends Component {
  render() {
    const badgeQuality = require("../../images/badge_quality_250x250.png");
    const LaughsAndClaps = require("../../images/badge_laughs_and_claps_250x250.png");
    return (
      <div className="block-row-teal">
        <div className="container">
          <div className="block">
            <img src={badgeQuality} />
          </div>
          <div className="block middle">
            <div className="the-difference">
              <span className="fontFancy">What is the</span>
              <span className="fontPrimary">Sons of Vidya Difference</span>
            </div>
          </div>
          <div className="block">
            <img src={LaughsAndClaps} />
          </div>
        </div>
      </div>
    );
  }
}

class Row2 extends Component {
  render() {
    const oneShop = require("../../images/badge_one_shop_250x250.png");
    const owned = require("../../images/badge_owned_250x250.png");
    return (
      <div className="block-row-orange">
        <div className="container">
          <div className="block">
            <img src={oneShop} />
          </div>
          <div className="block middle">
            <img src={owned} />
          </div>
          <div className="block">
            <img src="http://localhost:8080/src/images/badge_quality_250x250.png" />
          </div>
        </div>
      </div>
    );
  }
}

class Blocks extends Component {
  render() {
    return (
      <section id="blocks">
        <Row1 />
        <Row2 />
      </section>
    );
  }
}

module.exports = Blocks;