import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import App from './App';
import ResponseForm from './components/responseForm/ResponseForm';

test('first name label should be rendered', ()=>{
  render(<ResponseForm/>)
  const firstnameLabel = screen.getByText(/First Name/i)
  expect(firstnameLabel).toBeInTheDocument()
})
