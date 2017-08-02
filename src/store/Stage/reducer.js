import { SELECT_VIDEO } from "./actions";

const initialState = {
  currentPlaylist: [
    {
      id: "https://www.youtube.com/watch?v=QAOMIH7cgh0",
      owner: "Groot",
      title: "Mr blue sty song",
      origin: "youtube"
    },
    {
      id: "https://www.youtube.com/watch?v=leC5WE7P2To",
      owner: "The father",
      title: "cat steven Father and son",
      origin: "youtube"
    },
    {
      id: "https://www.youtube.com/watch?v=Aa0kwIYozvs",
      owner: "120bpm",
      title: "DubVision feat. Nevve - Something Real",
      origin: "youtube"
    },
    {
      id: "https://www.youtube.com/watch?v=viAIxJWrv40",
      owner: "120bpm",
      title: "Lost frequencies",
      origin: "youtube"
    },
    {
      id: "https://www.youtube.com/watch?v=ZXtxiBgl5PY",
      owner: "120bpm",
      title: "Arilena Ara - Nëntori",
      origin: "youtube"
    }
  ],
  currentVideo: {
    owner: "Anas",
    title: "Dark souls Soundtrack",
    link: "https://www.youtube.com/watch?v=xggWJLgN-Es",
    origin: "youtube"
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      console.log(action, state);
      state = { ...state, currentVideo: action.video };
      return state;
    default:
      return state;
  }
};

export default reducer;
