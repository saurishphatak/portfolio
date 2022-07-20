import React, { Fragment, useState } from 'react';
import { projects } from '../../ProjectsData';
import "./Works.css";


export default function Works() {

    const actionMap = new Map<string, Function>(
        [
            [
                "left",
                () => {
                    setCurrentSlide((previous) => {
                        return previous - 1 >= 0 ? previous - 1 : projects.length - 1;
                    });
                }
            ],

            [
                "right",
                () => {
                    setCurrentSlide((previous) => {
                        return previous + 1 <= projects.length - 1 ? previous + 1 : 0;
                    });
                }
            ]
        ]

    );

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way: string) => {
        actionMap.has(way) && actionMap.get(way)?.();
    }

    const projectWorks = projects.map(project => {
        return (
            <Fragment key={project.title}>
                <div className="works-container">
                    <div className="works-item">
                        <div className="works-left">
                            <div className="works-left-container">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <span>Projects</span>
                            </div>
                        </div>

                        <div className="works-right">
                            <img src={project.image} alt="" />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    });

    return (

        <div className="works" id="works">
            <div className="slider" style={{
                transform: `translateX(-${currentSlide * 100}vw)`
            }}>
                {projectWorks}
            </div>

            <img className='arrow arrow-left' src="assets/Arrow.png" alt="" onClick={() => handleClick("left")} />
            <img className='arrow arrow-right' src="assets/Arrow.png" alt="" onClick={() => handleClick("right")} />
        </div >
    );
}
