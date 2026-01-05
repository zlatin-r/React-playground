import React from 'react';
import './App.css'
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";


function App() {
    return (
        <div id="app">
            <Header/>
            <main>
                <section id='main-container'>
                    <nav id='main-nav'>
                        <ul>
                            <TabButton>TabOne</TabButton>
                            <TabButton>TabTwo</TabButton>
                            <TabButton>TabThree</TabButton>
                        </ul>
                    </nav>
                </section>
            </main>
        </div>
    );
}

export default App;
