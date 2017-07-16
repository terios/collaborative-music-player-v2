import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fromPlayer} from 'store/selectors'

import {Player} from 'components'

class PlayerContainer extends Component {
  static propTypes = {}

  getPlayerConfig() {
    return {
      height: '450',
      width: '900',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
  }

  render() {
    return <Player playerConfig={this.getPlayerConfig} {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  video: fromPlayer.getCurrentVideo(state)
})

const mapDispatchToProps = (dispatch, {name}) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
