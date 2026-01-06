import {useState} from 'react';
import './App.css'
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";


function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
    }


    return (
        <div id="app">
            <Header/>
            <main>
                <section id='main-container'>
                    <nav id='main-nav'>
                        <ul>
                            <TabButton onSelect={() => handleSelect('TabOne')}>TabOne</TabButton>
                            <TabButton onSelect={() => handleSelect('TabTwo')}>TabTwo</TabButton>
                            <TabButton onSelect={() => handleSelect('TabThree')}>TabThree</TabButton>
                        </ul>
                    </nav>
                </section>
            </main>
        </div>
    );
}

export default App;
