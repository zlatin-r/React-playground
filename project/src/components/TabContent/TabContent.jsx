import {TABS_CONTENT} from "../../data.jsx";

export default function TabContent() {
    let tabContent = <p>Please select tab</p>

    if (selectedTopic) {
        tabContent = (
            <div>
                <h3>{TABS_CONTENT[selectedTopic].text}</h3>
            </div>
        )
    }
    return (
        <section id='tab-content'>
            {tabContent}
        </section>
    )
}