import React from 'react';
import './App.css'
import Header from './components/Header/Header';

function MainGoal() {
    return (
        <p>
            My main goal: Learn React in-depth and from the ground up
        </p>
    );
}

function App() {
    return (
        <div id="app">
            <Header/>
            <MainGoal/>
        </div>
    );
}

export default App;
