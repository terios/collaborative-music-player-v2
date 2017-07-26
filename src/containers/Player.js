import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { fromPlayer } from "store/selectors";
//import { modalHide } from 'store/actions'

import { Player } from "components";

const PlayerContainer = props => <Player {...props} />;

PlayerContainer.propTypes = {
  currentVideo: PropTypes.object
};

const mapStateToProps = state => ({
  currentVideo: state.main.currentVideo
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
