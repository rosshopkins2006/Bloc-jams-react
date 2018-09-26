import React, { Component } from 'react';
import menuData from "./../data/menuData";

class DropDown extends Component {
  render() {
    return (
      <section className="menu">
    <div className="dd-wrapper">
      <div className="dd-header">
        <div className="dd-header-title"></div>
      </div>
      <ul className="dd-list">
        <li className="dd-list-item"></li>
        <li className="dd-list-item"></li>
      </ul>
    </div>
    </section>
    )
  }
}

export default DropDown;
