import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { actionCreators } from "./MeineAction";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" style={{ color: this.props.color }}>
          App Seite
        </NavLink>
        <NavLink to="/SeiteEins">Seinte Eins</NavLink>
        <NavLink to="/SeiteZweiYOO">Seinte Zwei</NavLink>

        <button onClick={this.props.farbeAction}>change color</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.color
  };
}

export const Navi = connect(
  mapStateToProps,
  actionCreators
)(Navigation);
