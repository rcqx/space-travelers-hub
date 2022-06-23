import {
  waitFor, screen, render, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

describe('Testing the Missions component', () => {
  test('When data fetched from API all 10 missions are rendering succesfully', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    await waitFor(() => {
      expect(screen.getAllByText('Join mission').length).toBeGreaterThanOrEqual(10);
    });
  });

  test('Main table headers are rendering properly', () => {
    render(<Provider store={store}><Missions /></Provider>);
    expect(screen.getByText('Missions') && screen.getByText('Description') && screen.getByText('Status')).toBeTruthy();
  });

  test('Badges are displaying correctly on mission page load', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    await waitFor(() => {
      expect(screen.getAllByText('NOT A MEMBER').length).toBeGreaterThanOrEqual(10);
    });
  });

  test('Clicking on Join mission buttons enable, thus updating member bagdes', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    await waitFor(() => {
      expect(fireEvent.click(screen.getAllByText('Join mission')[0])).toBeTruthy();
    });
  });
});
