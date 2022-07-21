import React, { useState } from 'react';
import Introduction from './Components/Introduction/Introduction';
import Projects from './Components/Projects/Projects';
import Topbar from './Components/Topbar/Topbar';
import "./App.css";
import SideMenu from './Components/SideMenu/SideMenu';
import Works from './Components/Works/Works';
import About from './Components/About/About';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className="sections">
                <Introduction />

                <Projects />

                <About />
                {/* <Works /> */}
            </div>
        </div>
    );
}

export default App;
