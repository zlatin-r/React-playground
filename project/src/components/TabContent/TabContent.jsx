import {TABS_CONTENT} from "../../data.jsx";
import Section from "../Section/Section.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import {useState} from "react";
import './TabContent.css'

export default function TabContent() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
    }

    let tabContent = <p>Please select tab</p>

    if (selectedTopic) {
        tabContent = (
            <div>
                <h2>{TABS_CONTENT[selectedTopic].title}</h2>
                <h3>{TABS_CONTENT[selectedTopic].text}</h3>
            </div>
        )
    }

    return (
        <>
            <Section id='main-container'>
                <nav id='main-nav'>
                    <Tabs
                        ButtonsContainer="ul"
                        buttons={
                            <>
                                <TabButton isSelected={selectedTopic === 'TabOne'}
                                           onClick={() => handleSelect('TabOne')}>TabOne</TabButton>
                                <TabButton isSelected={selectedTopic === 'TabTwo'}
                                           onClick={() => handleSelect('TabTwo')}>TabTwo</TabButton>
                                <TabButton isSelected={selectedTopic === 'TabThree'}
                                           onClick={() => handleSelect('TabThree')}>TabThree</TabButton>
                            </>}>
                    </Tabs>
                </nav>
            </Section>
            <Section id='tab-content'>
                {tabContent}
            </Section>
        </>
    )
}