import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fromPlayer } from 'store/selectors'

import {Player} from 'components'

class PlaylistContainer extends Component {
  static propTypes = {};

  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  render() {
    return <Player video={video} playerConfig={this.opts}/>
  }
}

const mapStateToProps = (state, {name, isOpen}) => ({
  video: fromPlayer.getCurrentVideo(state)
})

# const mapDispatchToProps = (dispatch, {name}) => ({
#   selectVideo: (video) => dispatch(selectVideo(video))
# })

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer)
