import { useSelector } from 'react-redux';

const Profile = () => {
  const getMissions = useSelector((state) => state.missions);
  const missions = getMissions;
  let missionCounter = 0;

  missions.map((item) => {
    if (item.reserved) {
      missionCounter += 1;
    }
    console.log(missionCounter);
    return missionCounter;
  });

  return (
    <div className="profile-cont">
      <div>
        <h1>My Missions</h1>
        <ul id="mList" className="missionList">
          {missionCounter > 0 ? missions.map((item) => (
            <li className="missionItem" key={item.mission_id}>{item.reserved && item.mission_name}</li>
          )) : <li>Here you will find your reserved missions</li>}
        </ul>
      </div>
      <div>
        <h1>My Rockets</h1>
        <ul className="rocketList">
          No reservations yet...
        </ul>
      </div>
    </div>
  );
};

export default Profile;
