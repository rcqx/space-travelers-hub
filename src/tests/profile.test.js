import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/Profile'

describe('Testing the Missions component', () => {
  const FETCH_API = 'space-travelers-hub/missions/FETCH_API';
  const baseMissionsUrl = 'https://api.spacexdata.com/v3/missions';

  // populate redux store before each test
  beforeEach(async () => {
    await fetch(baseMissionsUrl).then(data => data.json());
  });

  // Erase fetched data from redux store after each test
  afterEach(() => {
    act(() => store.dispatch({
      type: FETCH_API,
      payload: [],
    }));
  });

  test('On first load no saved missions appear on profile section', async () => {
    render(<Provider store={store}><Profile /></Provider>);
    await waitFor(() => {
      expect(screen.findByText('Here you will find your reserved missions')).toBeTruthy();
    });
  });
});
