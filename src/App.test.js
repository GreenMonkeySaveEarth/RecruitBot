import { render, screen } from '@testing-library/react';
import App from './App';
// Roy - Not used, can be removed.
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
