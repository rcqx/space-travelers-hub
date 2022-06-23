import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions'

describe('Testing the Missions component', () => {
  const FETCH_API = 'space-travelers-hub/missions/FETCH_API';
  const baseMissionsUrl = 'https://api.spacexdata.com/v3/missions';

  // populate redux store before each test
  beforeEach(async () => {
    await fetch(baseMissionsUrl);
  });

  // Erase fetched data from redux store after each test
  afterEach(() => {
    act(() => store.dispatch({
      type: FETCH_API,
      payload: [],
    }));
  });

  test('All 10 missions are rendering succesfully', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    await waitFor(() => {
      expect(screen.getAllByText('Join mission').length).toBeGreaterThanOrEqual(10);
    });
  });

  test('Main table headers are rendering properly', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    await waitFor(() => {
      expect(screen.getByText('Missions') && screen.getByText('Description') && screen.getByText('Status')).toBeTruthy();
    });
  });
});

