import "./Introduction.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typewriter } from "react-simple-typewriter";

export default function Introduction() {

    return (
        <div className="introduction" id="introduction">
            <div className="left">
                <div className="imgContainer"></div>
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

                    </h3>
                </div>

                <a href="#projects">
                    <KeyboardArrowDownIcon className='downIcon' />
                </a>
            </div>
        </div >
    )
}
