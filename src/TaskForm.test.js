/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import TaskForm from './Components/TaskForm';

test('should add task when form is submitted', () => {
    const addTaskMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<TaskForm addTask={addTaskMock} />);

    fireEvent.change(getByPlaceholderText('Enter a new task'), { target: { value: 'Test task' } });
    fireEvent.click(getByText('Add Task'));

    expect(addTaskMock).toHaveBeenCalledWith({ id: expect.any(Number), text: 'Test task', completed: false });
});
