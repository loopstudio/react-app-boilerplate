import { fireEvent } from '@testing-library/react';

export const fillInput = (input, value) => {
  fireEvent.change(input, { target: { value } });
};
