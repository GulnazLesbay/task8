import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updateTask } from './store';
import '../App.css';

const TaskUpdateForm = ({ task, closeModal }) => {
    const [title, setTitle] = useState(task.title);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(updateTask({ ...task, title })); 
        closeModal();
    };

    return (
        <div style={{ margin: '20px auto', maxWidth: '400px' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Update</Button>
            </Form>
        </div>
    );
};

export default TaskUpdateForm;