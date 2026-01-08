import './App.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import TabContent from "./components/TabContent/TabContent.jsx";


function App() {

    return (
        <div id="app">
            <Header/>
            <main>
                <TabContent/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
