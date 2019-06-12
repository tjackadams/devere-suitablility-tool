import Log from "../Log";

const initialState = {
  progress: {
    currentValue: 0,
    total: 0
  }
};

const types = {
  SET_PROGRESS: "SET_PROGRESS",
  RESET_PROGRESS: "RESET_PROGRESS",
  SET_ANSWERS: "SET_ANSWERS"
};

const reducer = (state = initialState, action) => {
  Log.info({ oldState: state, type: action.type, payload: action.payload });
  switch (action.type) {
    case types.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };
    case types.RESET_PROGRESS:
      return {
        ...state,
        progress: {
          currentValue: 0,
          total: 0
        }
      };
    case types.SET_ANSWERS:
      return {
        ...state,
        answers: action.payload
      };
    default:
      throw new Error("Unexpected action");
  }
};

export { initialState, types, reducer };
