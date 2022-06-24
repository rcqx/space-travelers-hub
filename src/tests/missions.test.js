import {
  screen, render, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducerMissions from '../redux/missions/missions';
import Missions from '../components/Missions';
import rocketReducer from '../redux/rockets/rockets';

const mockStore = () => {
  const preloadedState = {
    rockets: [{
      id: 1,
      flickr_images: 'https://imgur.com/DaCfMsj.jpg',
      rocket_name: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      reserved: false,
    },
    {
      id: 2,
      flickr_images: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
      rocket_name: 'Falcon 9',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      reserved: false,
    },
    {
      id: 3,
      flickr_images: 'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
      rocket_name: 'Falcon Heavy',
      description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
      reserved: false,
    }],
    missions: [
      {
        mission_id: '9D1B7E0',
        mission_name: 'Thaicom',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        reserved: false,
      },
      {
        mission_id: 'F4F83DE',
        mission_name: 'Telstar',
        description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
        reserved: false,
      },
      {
        mission_id: 'F3364BF',
        mission_name: 'Iridium NEXT',
        description: 'In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium\'s proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways.',
        reserved: false,
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      rockets: rocketReducer,
      missions: reducerMissions,
    },
  });
};

describe('Testing the Missions component', () => {
  test('When data fetched from API all 10 missions are rendering succesfully', () => {
    render(<Provider store={mockStore()}><Missions /></Provider>);
    expect(screen.getAllByText('Join mission').length).toBeGreaterThanOrEqual(3);
  });

  test('Mission component main table headers are rendering correctly', () => {
    render(<Provider store={mockStore()}><Missions /></Provider>);
    expect(screen.getByText('Missions') && screen.getByText('Description') && screen.getByText('Status')).toBeTruthy();
  });

  test('Badges are displaying correctly on mission page load', () => {
    render(<Provider store={mockStore()}><Missions /></Provider>);
    expect(screen.getAllByText('NOT A MEMBER').length).toBeGreaterThanOrEqual(3);
  });

  test('Clicking on Join mission buttons enable, thus updating member bagdes', () => {
    render(<Provider store={mockStore()}><Missions /></Provider>);
    expect(fireEvent.click(screen.getAllByText('Join mission')[0])).toBeTruthy();
  });
});
