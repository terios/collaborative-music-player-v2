import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Playlist } from "components";

const PlaylistContainer = props => <Playlist {...props} />;

PlaylistContainer.propTypes = {};

const mapStateToProps = state => ({
  playlist: state.main.currentPlaylist
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
