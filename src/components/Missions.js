import { useSelector } from 'react-redux';

const Missions = () => {
  const getMissions = useSelector((state) => state.missions);
  const missions = getMissions;
  return (
    <div className="missionContainer">
      <table className="missionTable" cellSpacing="0">
        <thead>
          <tr>
            <th className="mainTh">Missions</th>
            <th className="descriptionTh">Description</th>
            <th className="statusTh">Status</th>
            <th className="btnTh"> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((item) => (
            <tr key={item.mission_id}>
              <td className="tdTitle">{item.mission_name}</td>
              <td>{item.description}</td>
              <td><span>NOT A MEMBER</span></td>
              <td className="btnCell"><button type="submit">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
