const FETCH_API = 'space-travelers-hub/missions/FETCH_API';
const UPDATE = 'space-travelers-hub/missions/UPDATE';
const initialState = [];
const baseMissionsUrl = 'https://api.spacexdata.com/v3/missions';

export const updateReservation = (id) => (
  { type: UPDATE, payload: id }
);

export const fetchMissions = () => async (dispatch) => {
  const connect = await fetch(baseMissionsUrl);
  const res = await connect.json().then((dataObject) => (dataObject));
  const dataArray = res.map((item) => {
    const container = {
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
      reserved: false,
    };
    return container;
  });
  dispatch({
    type: FETCH_API,
    payload: dataArray,
  });
};

export default function reducerMissions(state = initialState, action) {
  switch (action.type) {
    case FETCH_API:
      return action.payload;
    case UPDATE:
      return [...state.map((item) => {
        if (item.mission_id !== action.payload) {
          return item;
        }
        return { ...item, reserved: !item.reserved };
      })];
    default:
      return state;
  }
}
