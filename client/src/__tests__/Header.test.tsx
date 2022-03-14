import React from "react";
import ReactDOM from "react-dom";
import Header from '../components/header/Header';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div)
})

it("renders header correctly", () => {
  const {getByTestId} = render(<Header />)
  expect(getByTestId('header')).toHaveTextContent('System')
})