// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
import { initialState } from './selectors'
import { SELECT_VIDEO } from './actions'

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case SELECT_VIDEO:
      let currentVideo = state.currentVideo;
      if (currentVideo) {
        return {...state,currentVideo: payload.video, played:[...state.played,payload.video] }
      } else {
        return {
          ...state,
          currentVideo: video,
          played:[video]
        }
      }
    default:
      return state
  }
}
