import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Board } from "components";
import { startGame, initiateGame, send } from "store/actions";

class GameContainer extends React.Component {
  render() {
    return <Board {...this.props} />;
  }
}

GameContainer.propTypes = {
  initialNumber: PropTypes.number,
  currentNumber: PropTypes.number,
  history: PropTypes.array
};

const mapStateToProps = state => ({
  initialNumber: state.board.initialNumber,
  currentNumber: state.board.currentNumber,
  history: state.board.history
});

const mapDispatchToProps = dispatch => ({
  sendResult: n => dispatch(send(n))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
