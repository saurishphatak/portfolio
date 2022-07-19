import React, { useState } from 'react';
import Introduction from './Components/Introduction/Introduction';
import Projects from './Components/Projects/Projects';
import Topbar from './Components/Topbar/Topbar';
import "./App.css";
import SideMenu from './Components/SideMenu/SideMenu';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className="sections">
                <Introduction />

                <Projects />
            </div>
        </div>
    );
}

export default App;
