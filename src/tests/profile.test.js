import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/Profile'
import Missions from '../components/Missions'

describe('Testing the Missions component', () => {

  test('On first load no saved missions appear on profile section', () => {
    render(<Provider store={store}><Profile /></Provider>);
    expect(screen.findByText('Here you will find your reserved missions')).toBeTruthy();
  });

  test('On first load no saved rockets appear on profile section', () => {
    render(<Provider store={store}><Profile /></Provider>);
    expect(screen.findByText('Here you will find your reserved rockets')).toBeTruthy();
  });

  test('Clicking on first "Join mission" button in the missions page enable, thus this will render mission on profile page, ', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    await waitFor(() => {
      expect(fireEvent.click((screen.getAllByText('Join mission')[0]))).toBeTruthy();
    });
  });

  test('Clicking on random "Join mission" button in the missions page enable, thus this will render mission on profile page, ', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    await waitFor(() => {
      expect(fireEvent.click((screen.getAllByText('Join mission')[Math.floor(Math.random() * 10) + 1]))).toBeTruthy();
    });
  });
});

