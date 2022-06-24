export const SET_ROCKETS = 'SET_ROCKETS';
export const RESERVE_ROCKET = 'RESERVE_ROCKET';

const fetchRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets')
    .catch((error) => error.message);
  let fetchedData = await response.json();
  fetchedData = fetchedData.map((rocket) => {
    const obj = {
      id: rocket.id,
      flickr_images: rocket.flickr_images[0],
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      reserved: false,
    };
    return obj;
  });
  dispatch({
    type: SET_ROCKETS,
    payload: fetchedData,
  });
};

export const reserveRocket = (id) => (
  { type: RESERVE_ROCKET, payload: id }
);

export default fetchRockets;
