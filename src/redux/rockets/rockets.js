import * as actions from './actiontypes';

const rocketReducer = (state = [], action = {}) => {
  switch (action.type) {
    case actions.SET_ROCKETS:
      return action.payload;
    case actions.RESERVE_ROCKET:
      return [
        ...state.map((rocket) => {
          if (rocket.id !== action.payload) {
            return rocket;
          }
          return { ...rocket, reserved: !rocket.reserved };
        }),
      ];
    default:
      return state;
  }
};

export default rocketReducer;
