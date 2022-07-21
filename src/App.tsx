import React, { useState } from 'react';
import Introduction from './Components/Introduction/Introduction';
import Projects from './Components/Projects/Projects';
import Topbar from './Components/Topbar/Topbar';
import "./App.css";
import SideMenu from './Components/SideMenu/SideMenu';
import About from './Components/About/About';

function App() {
    let [menuOpen, setMenuOpen] = useState(false);

    const toggleSidemenu = () => {

        setMenuOpen(previous => {
            // Close the menu only if it is open
            if (previous)
                return menuOpen = !previous;
            return previous;
        });
    }

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className="sections"
                onClick={toggleSidemenu}
            >

                <Introduction />

                <Projects />

                <About />
                {/* <Works /> */}
            </div>
        </div>
    );
}

export default App;
