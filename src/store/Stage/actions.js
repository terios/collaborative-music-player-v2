export const SELECT_VIDEO = "SELECT_VIDEO";
export const NEXT_VIDEO = "NEXT_VIDEO";
export const PREVIOUS_VIDEO = "PREVIOUS_VIDEO";

export const selectVideo = video => ({
  type: SELECT_VIDEO,
  video
});

export const nextVideo = video => ({
  type: NEXT_VIDEO,
  video
});

export const previousVideo = video => ({
  type: PREVIOUS_VIDEO,
  video
});
