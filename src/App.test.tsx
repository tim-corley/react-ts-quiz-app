import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Renders Start Button', () => {
  render(<App />);
  const btnElem = screen.getByText('Start');
  expect(btnElem).toBeInTheDocument();
});

test('Clicking "Start" Fetches Data & Displays First Question', async () => {
  render(<App />);
  userEvent.click(screen.getByText('Start'));
  expect(await screen.findByText('Toy Story')).toBeInTheDocument();
});

test('Selecting Correct Answer Increases Score', async () => {
  render(<App />);
  userEvent.click(screen.getByText('Start'));
  userEvent.click(await screen.findByText('Toy Story'));
  expect(await screen.findByText('Score: 1')).toBeInTheDocument();
});

test('Selecting Wrong Answer Does Not Increase Score', async () => {
  render(<App />);
  userEvent.click(screen.getByText('Start'));
  userEvent.click(await screen.findByText('Tron'));
  expect(await screen.findByText('Score: 0')).toBeInTheDocument();
});

test('Next Button Prompts Next Question', async () => {
  render(<App />);
  userEvent.click(screen.getByText('Start'));
  userEvent.click(await screen.findByText('Toy Story'));
  userEvent.click(await screen.findByText('Next'));
  expect(await screen.findByText('Question: 2 / 10')).toBeInTheDocument();
  expect(await screen.findByText('The Vikings')).toBeInTheDocument();
});
