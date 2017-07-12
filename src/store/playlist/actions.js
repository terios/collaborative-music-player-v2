
export const SELECT_VIDEO = 'SELECT_VIDEO'

export const selectVideo = (video) => ({
  type: SELECT_VIDEO,
  payload: {
    video,
  },
})
