import "./Introduction.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Introduction() {

    const spanRef = useRef(null);
    useEffect(() => {
        if (spanRef.current) {
            init(spanRef.current, {
                strings: ["Software Developer", "Concept Visualizer"]
            });
        }
    }, []);

    return (
        <div className="introduction" id="introduction">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Test 2.png" alt="" />

                </div>
            </div>

            <div className="right">

                <div className="introRightWrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Saurish Phatak</h1>
                    <h3>
                        {/*
                        //! TODO : Add software dev/ concept visualizer
                        //! animation
                     */}

                        <span ref={spanRef}></span>

                    </h3>
                </div>

                <a href="#projects">
                    <KeyboardArrowDownIcon className='downIcon' />
                </a>
            </div>
        </div >
    )
}
