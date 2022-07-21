import "./Projects.css";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Fragment } from "react";
import { projects } from "../../ProjectsData";

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

                    <CardActions>
                        {project?.repoLink?.length > 0 &&

                            <a href={project.repoLink}>
                                <Button size="small">See Code</Button>
                            </a>
                        }

                        {project?.liveDemoLink?.length > 0 &&
                            <a href={project.liveDemoLink}>
                                <Button size="small">Live Demo</Button>
                            </a>
                        }
                    </CardActions>
                </Card>
            </Fragment >
        )
    });

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
