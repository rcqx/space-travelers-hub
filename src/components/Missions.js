import { useSelector, useDispatch } from 'react-redux';
import { updateReservation } from '../redux/missions/missions';

const Missions = () => {
  const getMissions = useSelector((state) => state.missions);
  const missions = getMissions;
  const dispatch = useDispatch();

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
              <td>
                {item.reserved && <span style={{ backgroundColor: 'green' }}>Active member</span>}
                {!item.reserved && <span>NOT A MEMBER</span>}
              </td>
              <td className="btnCell">
                <button
                  type="button"
                  onClick={() => dispatch(updateReservation(item.mission_id))}
                  style={{
                    border: !item.reserved ? '1px solid black' : '1px solid red',
                    backgroundColor: 'white',
                    color: !item.reserved ? 'black' : 'red',
                  }}
                >
                  {!item.reserved ? 'Join mission' : 'Leave mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
