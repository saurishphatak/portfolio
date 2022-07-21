import React from 'react';
import "./About.css";

export default function About() {
    return (
        <div className="about">

            <div className="about-left">

                <h1>About Me</h1>

                <div className="about-me-text">

                    <p>
                        I'm a passionate
                        <span id='sde'> software developer</span> and a
                        <span id='cv'> concept visualizer</span>.

                        <p>
                            <br />
                            I use diagrams (Concept Visuals) to learn, retain and present abstract information like computer programming.
                        </p>

                    </p>

                    <p>
                        Also, I get my cardio done by running code!
                        <p >🏃‍♂️ == 💻</p>
                    </p>

                </div>

            </div>

            <div className="about-right">
                Right
            </div>
        </div>
    )
}
