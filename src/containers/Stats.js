import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Stats } from "components";
import { updateScore } from "store/actions";

class StatsContainer extends React.Component {
  render() {
    return <Stats {...this.props} />;
  }
}

StatsContainer.propTypes = {
  player1: PropTypes.object,
  player2: PropTypes.object,
  bet: PropTypes.number
};

const mapStateToProps = state => ({
  player1: state.stats.players[state.stats.keys[0]] || {},
  player2: state.stats.players[state.stats.keys[1]] || {},
  bet: state.stats.bet
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
