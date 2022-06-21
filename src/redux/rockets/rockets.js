import SET_ROCKETS from './actiontypes';

const rocketReducer = (state = [], action = {}) => {
  switch (action.type) {
    case SET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
