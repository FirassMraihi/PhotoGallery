/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('react-native-raw-bottom-sheet');
it('checks if Async Storage is used', async () => {
  expect(AsyncStorage.getItem).toBeCalledWith('myKey');
})

it('renders correctly', () => {
  renderer.create(<App />);
});
