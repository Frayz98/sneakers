import './App.scss';

import AppHeader from "../appHeader/AppHeader";
import AppContent from "../appContent/AppContent";

const App = () => {


    return (
        <div className="container">
            <AppHeader/>
            <main className="main">
                <AppContent/>
            </main>
        </div>
    )
}


export default App;