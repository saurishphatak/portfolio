import React from 'react';
import { environment } from '../../environment';
import "./About.css";

export default function About() {
    return (
        <div className="about" id='about-me-contact'>

            <div className="about-left">

                <h1>About Me</h1>

                <div className="about-me-text">

                    <p>
                        I'm a passionate
                        <span id='sde'> software developer</span> and a
                        <span id='cv'> concept visualizer</span>.

                    </p>

                    <p>
                        I use diagrams (Concept Visuals) to learn, retain and present abstract information like computer programming.

                    </p>

                    <p>
                        Also, I get my cardio done by running code!
                        <br />
                        <span >🏃‍♂️ == 💻</span>
                    </p>

                </div>

            </div>

            <div className="about-right">
                <h1>Contact</h1>

                <div className="contact-me-text">
                    <p>
                        Pop me an email at
                        <br />
                    </p>

                    <span id='email'>{environment.myEmail}</span>

                </div>

                <a href={`mailto:${environment.myEmail}`}>
                    <button
                        id='get-in-touch-button'
                    >Let's get in touch!</button>
                </a>
            </div>
        </div>
    )
}
