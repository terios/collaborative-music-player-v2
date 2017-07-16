export const initialState = {
  currentVideo: {
    id: 'QAOMIH7cgh0',
    owner: 'Groot',
    title: 'Mr blue sty song'
  }
}

export const getCurrentVideo = (state = initialState) => state.currentVideo || initialState.currentVideo
