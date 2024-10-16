/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import TodoApp from './Components/TodoApp';

test('should add and toggle task completion', () => {
    const { getByPlaceholderText, getByText, getByRole } = render(<TodoApp />);

    // Add a task
    fireEvent.change(getByPlaceholderText('Enter a new task'), { target: { value: 'New Task' } });
    fireEvent.click(getByText('Add Task'));

    // Verify task is added
    expect(getByText('New Task')).toBeInTheDocument();

    // Toggle completion
    fireEvent.click(getByRole('checkbox'));
    expect(getByRole('checkbox')).toBeChecked();
});
