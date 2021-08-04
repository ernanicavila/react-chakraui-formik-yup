import React from 'react';
import Loading from './inicial';
import { render, fireEvent } from '@testing-library/react';

test('testing loading button', () => {
  const { getByTestId } = render(<Loading />);
  const LoadingEl = getByTestId('testLoadingSpin');
  fireEvent.animationIteration(LoadingEl);

  expect(LoadingEl.textContent).toBe('Aguardando...');
});
