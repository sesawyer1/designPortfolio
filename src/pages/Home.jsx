import '../App.css';

import React from 'react';
import {Link} from "react-router-dom"
import ProjectTile from '../components/ProjectTile';
import { Grid } from '../pages/Projects';
import { images } from '../images/images';


const Home = () => {

    return (
        <div className="Landing-Page">
            <header className="Landing-Page-Header">
                <h1 className='source-code-pro-header'> SARAH SAWYER</h1>
                <h2 className='source-code-pro-sub-header'>Design, Computer Science, <br></br>and other bits</h2>
                <div className='flex-center'><h1 className='recent-projects'>RECENT PROJECTS</h1></div>

                <Grid>
                    <Link to='projects/underground' className='no-underline'><ProjectTile image={images.UGTitle} title="underground" subtitle="social media for artists"/></Link>
                    <Link to='projects/pedalpilot' className='no-underline'><ProjectTile image={images.PPTitle} title="PedalPilot" subtitle="cycling routes for tourists" /></Link>
                    <Link to='projects/earthexplorer' className='no-underline'><ProjectTile image={images.EETitle} title="Earth Explorer" subtitle="multi-player platformer game" /></Link>
                
                </Grid> 

            <h3 className='source-code-pro-footer'>
                Contact me at: <br/><br/>
                email: <a href='mailto:sarahsawyer2024@u.northwestern.edu' className='email-link'>sarahsawyer2024@u.northwestern.edu</a> <br/><br/>
                or connect with me on <a href='https://www.linkedin.com/in/sarah-sawyer-5541a81a9/' className='email-link'>LinkedIn</a>
            
            </h3>
                
                
            </header>
        </div>
    )
}

export default Home;