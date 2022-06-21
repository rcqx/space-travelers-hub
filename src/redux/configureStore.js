import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerMissions, { fetchMissions } from './missions/missions';
import rocketReducer from './rockets/rockets';
import fetchRockets from './rockets/api';

const rootReducer = reducerMissions;

// const rootReducer = combineReducers({
//   books: reducerBooks,
//   status: reducerStatus,
// });

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: rootReducer,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => { store.getState(); });
store.dispatch(fetchMissions());
store.dispatch(fetchRockets());

export default store;
