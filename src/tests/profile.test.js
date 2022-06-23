import {
  render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/Profile'

describe('Testing the Missions component', () => {

  test('On first load no saved missions appear on profile section', async () => {
    render(<Provider store={store}><Profile /></Provider>);
    await waitFor(() => {
      expect(screen.findByText('Here you will find your reserved missions')).toBeTruthy();
    });
  });
});
