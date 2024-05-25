import "../App.css"
import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import ProjectTile from "../components/ProjectTile";
import { images } from "../images/images"



const Projects = () => {

    return (
        <div>
            <ProjectTitle>HERE IS MY WORK...</ProjectTitle>   

            <Grid>
                    <Link to='underground' className='no-underline'><ProjectTile image={images.UGTitle} title="underground" subtitle="social media for artists"/></Link>
                    <Link to='pedalpilot' className='no-underline'><ProjectTile image={images.PPTitle} title="PedalPilot" subtitle="cycling routes for tourists" /></Link>
                    <Link to='earthexplorer' className='no-underline'><ProjectTile image={images.EETitle} title="Earth Explorer" subtitle="multi-player platformer game" /></Link>
                
                </Grid>  
            <h3 className='source-code-pro-footer'>
                Contact me at: <br/><br/>
                email: <a href='mailto:sarahsawyer2024@u.northwestern.edu' className='email-link'>sarahsawyer2024@u.northwestern.edu</a> <br/><br/>
                or connect with me on <a href='https://www.linkedin.com/in/sarah-sawyer-5541a81a9/' className='email-link'>LinkedIn</a>
            
            </h3>
        </div>
    );
};

export const ProjectTitle = styled.h1`
    text-decoration: none;
    font-size: 40px;
    font-weight: 400;
    margin-left: 27px;
    margin-top: 43px;
    color: black;
    
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Creates three columns */
    gap: 20px;
    margin-left: 130px;
`

export default Projects;