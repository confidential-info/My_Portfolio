import React, { useRef } from 'react';

//CSS Import
import "./Projects.css";

//Data Import
import { PROJECTS } from '../utile/data';

//Component Import
import ProjectCard from './ProjectCard/ProjectCard';

//React Slick Carousal Import
import Slider from "react-slick";

function Projects() 
{
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1.
                },
            },
        ],
    };
    const sliderRigth = () => {
        sliderRef.current.slickNext();
    };
    const sliderLeft = () => {
        sliderRef.current.slickPrev();
    }; 
    return (
        <section className="project-container">
            <h5>Projects</h5>
            <div className="project-content">
                <div className="arrow-right" onClick={sliderRigth}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </div>
                <div className="arrow-left" onClick={sliderLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {
                        PROJECTS.map((item) => {
                            return <ProjectCard key={item.title} details={item} />
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Projects;