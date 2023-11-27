import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav.jsx';

function App() {
    return (
        <div className="App">
            <Router>
            <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
            </header>
            <Nav/>
            </Router>
            <br/>
            <StudentForm />

            <p>Student list:</p>
            <StudentList />
        </div>
    );
}

export default App;
