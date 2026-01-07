import {useState} from 'react';
import {TABS_CONTENT} from './data';
import './App.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";


function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
    }

    let tabContent = <p>Please select tab</p>

    if (selectedTopic) {
        tabContent = (
            <div>
                <h3>{TABS_CONTENT[selectedTopic].text}</h3>
            </div>
        )
    }

    return (
        <div id="app">
            <Header/>
            <main>
                <section id='main-container'>
                    <nav id='main-nav'>
                        <ul>
                            <TabButton isSelected={selectedTopic === 'TabOne'}
                                       onSelect={() => handleSelect('TabOne')}>TabOne</TabButton>
                            <TabButton isSelected={selectedTopic === 'TabTwo'}
                                       onSelect={() => handleSelect('TabTwo')}>TabTwo</TabButton>
                            <TabButton isSelected={selectedTopic === 'TabThree'}
                                       onSelect={() => handleSelect('TabThree')}>TabThree</TabButton>
                        </ul>
                    </nav>
                </section>
                <section id='tab-content'>
                    {tabContent}
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
