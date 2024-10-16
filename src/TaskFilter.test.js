/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import TaskFilter from './Components/TaskFilter';

test('should change filter when a button is clicked', () => {
    const setFilterMock = jest.fn();
    const { getByText } = render(<TaskFilter setFilter={setFilterMock} />);

    fireEvent.click(getByText('Completed'));
    expect(setFilterMock).toHaveBeenCalledWith('Completed');
});
