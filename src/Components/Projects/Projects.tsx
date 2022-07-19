import "./Projects.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Fragment } from "react";

const projects = [
    {
        image: "assets/AraamTSImage.jpeg",
        title: "Araam TS",
        description: "Parody app on REST API that uses a JSON file to set up Express Apps and Routers."
    },
    {
        image: "assets/DataClassGeneratorImage.jpeg",
        title: "Data Class Generator",
        description: "Tired of writing Data Classes by hand? Data Class Generator to the rescue! Configure your data classes on the web and download the auto generated class."
    }
];

export default function Projects() {
    const projectCards = projects.map(project => {
        return (
            <Fragment key={project.title}>
                <Card
                    className="item"

                    sx={{
                        maxWidth: "345px",
                        height: "370px"
                    }}
                >
                    <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                    />

                    <CardContent className='content'>
                        <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                        </Typography>
                        <Typography variant="body2" >
                            {project.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Fragment >
        )
    })
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>

            <div className="container">
                {/* <div className="item">
                    <img src="assets/DataClassGeneratorImage.jpeg" alt="" />
                    <h3>Data Class Generator</h3>
                </div>

                <div className="item">
                    <img src="assets/AraamTSImage.jpeg" alt="" />
                    <h3>Araam TS</h3>
                </div> */}

                {projectCards}

            </div>

        </div>
    )
}
