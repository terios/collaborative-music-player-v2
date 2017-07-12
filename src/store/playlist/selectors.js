// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
export const initialState = {
  playlist: [{
    id: 'QAOMIH7cgh0',
    owner: 'Groot',
    title: 'Mr blue sty song'
  }, {
    id: 'leC5WE7P2To',
    owner: 'The father',
    title: 'cat steven Father and son'
  }],
  currentVideo: [],
  played: []
}
export const getPlaylistVideos = (state = initialState) => state.playlist || initialState.playlist
