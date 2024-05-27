import '../App.css';
import React from 'react';
import styled from "styled-components"
import { images } from '../images/images';
import { Grid } from '../pages/Projects';
import VideoComponent from '../components/Video';

const ColorWord = styled.span`
    color: #FF7400;`


const RightAligned = styled.div`
    text-align: right;
    margin-right: 30px;`


const EarthExplorer = () => {
    return (

        <div>
            <div>
                <h1 className='header-projects'>Welcome to <ColorWord>EarthExplorer</ColorWord></h1>
                <p className='project-sub-header'>
                    A 2D platformer game that encourages you <br/>
                    to solve puzzles alongside the main <br/>
                    characters, Vinny and Rocky.
                </p>

                <p className='project-body' style={{ marginTop: '80px' }}>
                    Jan 2024 - March 2024 <br/>
                </p>

                <p className='project-body' style={{ marginTop: '-10px' }}>
                    <b>Skills:</b> Unity, C#, User Testing, Game Development
                </p>

                <p className='project-body' style={{ marginTop: '40px' }}>
                In the development of EarthExplorer, we aimed to <br/>promote three feelings within the player: <br/><br/>
                <ColorWord>
                a. Teamwork <br/>
                b. Discovery <br/>
                c. Challenge <br/>
                </ColorWord>
            
                </p>
            </div>

            <div>
               <VideoComponent/>
            </div>

           <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>a. Teamwork</ColorWord></h2>
                <Grid style={{marginLeft: '500px'}}>
                    <img src={images.rocky} alt="project" width={100} height={100} style={{marginLeft : '150px'}}/>
                    <img src={images.vinny} alt="project" width={100} height={100}/>
                </Grid>
                <p className='project-body' style={{ marginTop: '-85px' }}>
                    In initial testing of EarthExplorer, we found <br/>
                    that the user could easily beat each level <br/>
                    without both characters. This derails the <br/>
                    mechanics of the game, as we want the players <br/>
                    to use both characters together to win each <br/>
                    level. 
                </p>
                <Grid>
                <img src={images.bridge} alt="project" width={600} height={400} style={{marginLeft: '-20px'}}/>
                <img src={images.doublestand} alt="project" width={600} height={400}/>
                </Grid>

                <p className='project-body' style={{ marginTop: '25px' }}>
                    The examples above highlight ways in which we force both <br/>
                    characters to be necessary for gameplay. We implemented a <br/>
                    series of buttons that have to be held down to work, <br/>
                    platforms that break under certain characters’ weight, and <br/>
                    stretches of kill zones that require teamwork to solve.  
                </p>
                
            </div>

            <RightAligned>
                <h2 className='project-sub-header' style={{ marginTop: '78px'}}><ColorWord>b. Discovery</ColorWord></h2>

                <p className='project-body' style={{ marginTop: '35px' }}>
                    In initial testing of EarthExplorer, we found <br/>
                    that the user could easily beat each level <br/>
                    without both characters. This derails the <br/>
                    mechanics of the game, as we want the players <br/>
                    to use both characters together to win each <br/>
                    level. 
                </p>
                

                <p className='project-body' style={{ marginTop: '25px' }}>
                To encourage users to discover new functions <br/>
                within the game, we created different <br/>
                structures to climb and jump on, like <br/>
                mushrooms. The different colors of puddle <br/>
                also invite the user to learn through <br/>
                discovery to survive the levels.   
                </p>
                <img src={images.trees} alt="project" width={600} height={400} style={{marginRight: '700px', marginTop: '-300px'}}/>
                
            </RightAligned>

            <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>c. Challenge</ColorWord></h2>

                <p className='project-body' style={{ marginTop: '35px' }}>
                Finally, we aimed to challenge the user and <br/>
                encourage them to problem solve throughout <br/>
                the game. From play testing rounds, we <br/>
                learned that challenge can be derived through <br/>
                adding more features to each level and <br/>
                increasing the level of teamwork needed to win.  
                </p>
                <Grid>
                <img src={images.platforms} alt="project" width={600} height={400} style={{marginLeft: '-20px'}}/>
                <img src={images.bridge} alt="project" width={600} height={400}/>
                </Grid>

                <p className='project-body' style={{ marginTop: '25px' }}>
                We implemented levels focused on solving a puzzle to <br/>
                escape through a series of buttons, switches, and moving <br/>
                platforms. To increase the challenge in initial levels, <br/>
                we added weight features to the character. The users were <br/>
                challenged to learn which characters could use which <br/>
                types of platforms without breaking them. <br/><br/> 
                </p>


            <h3 className='source-code-pro-footer'>
            Contact me at: <br/><br/>
            email: <a href='mailto:sarahsawyer2024@u.northwestern.edu' className='email-link'>sarahsawyer2024@u.northwestern.edu</a> <br/><br/>
            or connect with me on <a href='https://www.linkedin.com/in/sarah-sawyer-5541a81a9/' className='email-link'>LinkedIn</a>
        
            </h3>

            </div>



        </div>
    )
}
export default EarthExplorer;