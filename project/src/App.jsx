import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import MainGoal from "./components/MainGoal/MainGoal.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
    return (
        <div id="app">
            <Header/>
            <MainGoal/>
            <menu>
                <TabButton>JSX</TabButton>
            </menu>
        </div>
    );
}

export default App;
