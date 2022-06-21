import SET_ROCKETS from './actiontypes';

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
    };
    return obj;
  });
  dispatch({
    type: SET_ROCKETS,
    payload: fetchedData,
  });
};

export default fetchRockets;
