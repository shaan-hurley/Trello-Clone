import React from "react";
import App from "../components/App"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';
import { render } from '@testing-library/react';

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}


test('Rendering app without crasing', () => {
  renderWithRedux(<App />);
}); 