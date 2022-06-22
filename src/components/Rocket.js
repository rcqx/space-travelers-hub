import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import '../css/rocket.css';

const Rocket = () => {
  const rocketsArray = useSelector((state) => state.rockets);

  return (
    <div>
      {rocketsArray.map((rocket) => (
        <div key={rocket.id}>
          <div className="rocket-container">
            <div className="img-container">
              <img src={rocket.flickr_images} alt="rocketName" className="image" />
            </div>
            <div className="info-contaiener">
              <h3 className="rocket-name">{rocket.rocket_name}</h3>
              <p className="rocket-description">
                {rocket.description}
              </p>
              <div>
                <button type="button" className="reserve-btn">Reserve Rocket</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rocket;
