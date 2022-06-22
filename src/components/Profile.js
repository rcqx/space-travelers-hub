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
        <ul className="missionList">
          Here you will see your appointed missions
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
