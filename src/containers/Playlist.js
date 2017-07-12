import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectVideo} from 'store/actions'
import { fromPlaylist } from 'store/selectors'

import {Playlist} from 'components'

class PlaylistContainer extends Component {
  static propTypes = {}

  thumbnail(videoId) {
    return `http://img.youtube.com/vi/${videoId}/1.jpg`
  }

  render() {
    return <Playlist name='okok' getThumbnail={this.thumbnail} selectVideo={selectVideo} {...this.props}/>
  }
}

const mapStateToProps = (state, {name, isOpen}) => ({
  videos: isOpen || fromPlaylist.getPlaylistVideos(state)
})

const mapDispatchToProps = (dispatch, {name}) => ({
  selectVideo: (video) => dispatch(selectVideo(video))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer)
