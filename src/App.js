import React from 'react';
import TaskList from './crud/TaskList';
import TaskForm from './crud/TaskForm';
import { Container } from 'react-bootstrap';

function App() {
    return (
        
        <Container className="app-container">
            <h1 className="app-heading">My Task Manager</h1>
            <TaskForm />
            <TaskList />
        </Container>
    );
}

export default App;
