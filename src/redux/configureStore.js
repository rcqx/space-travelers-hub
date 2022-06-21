import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerMissions, { fetchMissions } from './missions/missions';

const rootReducer = reducerMissions;

// const rootReducer = combineReducers({
//   books: reducerBooks,
//   status: reducerStatus,
// });

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk),
);

store.subscribe(() => { store.getState(); });
store.dispatch(fetchMissions());

export default store;
