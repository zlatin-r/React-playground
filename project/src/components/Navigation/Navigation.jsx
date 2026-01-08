import TabButton from "../TabButton/TabButton.jsx";
import {useState} from "react";

export default function Navigation() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
    }

    return (
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
    );
}
