import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { reserveRocket } from '../redux/rockets/api';
import '../css/rocket.css';

const Rocket = () => {
  const rocketsArray = useSelector((state) => state.rockets);
  const rocketsDataArray = rocketsArray;

  const dispatch = useDispatch();

  return (
    <div>
      {rocketsDataArray.map((rocket) => (
        <div key={rocket.id}>
          <div className="rocket-container">
            <div className="img-container">
              <img src={rocket.flickr_images} alt="rocketName" className="image" />
            </div>
            <div className="info-contaiener">
              <h3 className="rocket-name">{rocket.rocket_name}</h3>
              <p className="rocket-description">
                {!rocket.reserved && <span className="reserve-badge">Reserved</span>}
                {rocket.description}
              </p>
              <div>
                {rocket.reserved ? (
                  <button
                    type="button"
                    className="reserve-btn"
                    onClick={() => dispatch(reserveRocket(rocket.id))}
                  >
                    Reserve Rocket
                  </button>
                ) : (
                  <button
                    type="button"
                    className="reserve-btn cancel-btn"
                    onClick={() => dispatch(reserveRocket(rocket.id))}
                  >
                    Cancel Reservation
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rocket;
