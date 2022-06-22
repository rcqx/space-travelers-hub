import Rocket from './Rocket';

const Rockets = () => (
  <div>
    <Rocket />
  </div>
);

export default Rockets;

// const Rockets = () => {
//   const rocketsArray = useSelector((state) => state.rockets);
//   return (
//     <div className="rockets-container">
//       {rocketsArray.map((rocket) => (
//         <div className="rocket-details" key={rocket.id}>
//           <Rocket image={image} rocketName={rocketName} description={description} />
//         </div>
//       ))}
//     </div>
//   );
// };
