const Missions = () => (
  <div className="missionContainer">
    <table className="missionTable" cellSpacing="0">
      <thead>
        <tr>
          <th className="mainTh">Mission</th>
          <th className="descriptionTh">Description</th>
          <th className="statusTh">Status</th>
          <th className="btnTh"> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mission 1</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A nam id illum laudantium, enim magni, doloribus expedita
            pariatur beatae vero aspernatur. Est veritatis non quaerat
            repellendus maxime cumque facilis distinctio. Veritatis
            facilis expedita error
            maxime sequi odio cum minima, similique
            rerum nesciunt magni dignissimos placeat voluptatem.
            Deserunt tempora error voluptatem qui repellendus
            repellat voluptas, necessitatibus tempore alias nulla
            ipsum eos? Incidunt quam pariatur id aliquam,
            iure atque, sit ducimus sapiente laboriosam aliquid
            voluptate eos itaque, perferendis officiis eligendi
          </td>
          <td><span>NOT A MEMBER</span></td>
          <td className="btnCell"><button type="submit">Join Mission</button></td>
        </tr>
        <tr>
          <td>Mission 2</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A nam id illum laudantium, enim magni, doloribus expedita
            pariatur beatae vero aspernatur. Est veritatis non quaerat
            repellendus maxime cumque facilis distinctio. Veritatis
            facilis expedita error
            maxime sequi odio cum minima, similique
            rerum nesciunt magni dignissimos placeat voluptatem.
            Deserunt tempora error voluptatem qui repellendus
            repellat voluptas, necessitatibus tempore alias nulla
            ipsum eos? Incidunt quam pariatur id aliquam,
            iure atque, sit ducimus sapiente laboriosam aliquid
            voluptate eos itaque, perferendis officiis eligendi
          </td>
          <td><span>NOT A MEMBER</span></td>
          <td className="btnCell"><button type="submit">Join Mission</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Missions;
