import '../App.css';
import React from 'react';
import styled from "styled-components"
import { images } from '../images/images';
import { Grid } from '../pages/Projects';

const ColorWord = styled.span`
    color: #FF7400;`


const RightAligned = styled.div`
    text-align: right;
    margin-right: 30px;`


const MiddleAligned = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: -200px;
    `

const LeftBox = styled.div`
    display: grid;
    place-items: left;
    font-size: 20px;
    margin-top: -200px;
    margin-left: 30px;
    `

const BackgroundWhite = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    width: 50%;`

const RightBox = styled.div`
    display: flex;
    justify-content: right;
    place-items: right;
    font-size: 20px;
    margin-top: 140px;
    margin-right: 30px;
`

const PedalPilot = () => {
    return (
        <div>
            <div>
                <h1 className='header-projects'>Meet <ColorWord>PedalPilot</ColorWord></h1>
                <p className='project-sub-header'>
                    An interactive service connecting tourists <br/>
                    with cycling routes in new cities. <br/>
                </p>

                <p className='project-body' style={{ marginTop: '80px' }}>
                    March 2023 - June 2023 <br/>
                </p>

                <p className='project-body' style={{ marginTop: '-10px' }}>
                    <b>Skills:</b> User Research, System Design, <br/>
                    Human Computer Interaction
                </p>

                <p className='project-body' style={{ marginTop: '40px' }}>
                Key Steps: <br/><br/>
                <ColorWord>
                a. Needfinding <br/>
                b. Problem Statement <br/>
                c. Design Argument <br/>
                d. Interface Model <br/>
                e. System Model <br/>
                </ColorWord>
            
                </p>
            </div>
            <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>a. Needfinding</ColorWord></h2>

                <p className='project-body' style={{ marginTop: '35px' }}>
                Our initial problem space focused on commuters who cycle <br/>
                to their destination. From initial interviews, we learned <br/>
                that riders were nervous about looking for directions on <br/>
                their phone while moving. Riders tended to use platforms <br/>
                like Google Maps that were clunky and distracting to ride <br/>
                with. Above all, riders valued safety and felt like <br/>
                existing solutions did not adequately address safety concerns.
                </p>
                
            </div>

            <RightAligned>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>b. Problem Statement</ColorWord></h2>

                <p className='project-body' style={{ marginTop: '35px' }}>
                Through more user interviews, we learned that current <br/>
                solutions actually address our users’ needs. At this <br/>
                point we needed to pivot. We only had interview data <br/>
                surrounding cyclists, so we needed a way to adapt the <br/>
                problem to find a gap in solutions. By changing our <br/>
                target user to tourists, we could still use some of <br/>
                the cycling data we collected, as well as explore a <br/>
                less saturated market.
                </p>

            </RightAligned>
            
            <LeftBox>
                <BackgroundWhite>
                    
                    <ColorWord>Tourists want to both find a cycling path catered to their <br/>
                    location and to select preferences for breaks in their <br/>
                    ride, but can’t because no current solutions have these  <br/>
                    features, which leaves tourists feeling confused and lost.</ColorWord>
                    
                </BackgroundWhite>
                
            </LeftBox>

            <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>c. Design Argument</ColorWord></h2>

                <p className='project-body' style={{ marginTop: '35px' }}>
                Our goal was to provide an accessible and <br/>
                straightforward way for amateur bikers to gain access <br/>
                to public e-bikes and sightsee in an area that is <br/>
                tailored to their individual needs. While Google Maps <br/>
                leaned too heavily on user input and Strava felt too <br/>
                generalized to many users, we aimed to make tourists’ <br/>
                lives easy and allow them to maximize their visits.
                </p>
                
                <img src={images.blackBox} alt="project" width={600} height={350} style={{marginLeft: '800px', marginTop: '-200px'}}/>
            </div>

            <MiddleAligned style={{ marginTop: '60px'}}>
                <BackgroundWhite>
                    
                    <ColorWord>It’s hard to know what you want to see and where you want to go. We are allowing the user to choose their own experience while giving them a taste of the highlights of Chicago.</ColorWord>
                    
                </BackgroundWhite>
                
            </MiddleAligned>
            <RightAligned>
                <h2 className='project-sub-header' style={{ marginTop: '60px' }}><ColorWord>d. Interface Model</ColorWord></h2>

                <p className='project-body' style={{ marginTop: '35px' }}>
                Our initial prototype focused heavily on landmarks, <br/>
                but did not take into consideration where those <br/>
                landmarks were relative to one another. This led us to <br/>
                focus more on a “best fit” route, rather than <br/>
                including every point of interest. Additionally, we <br/>
                learned that users needed simpler input and outputs. <br/>
                We focused on reducing clutter in the service, as well <br/>
                as providing more imagery surrounding the different <br/>
                routes.
                </p>
                <img src={images.blackBox} alt="project" width={600} height={350} style={{marginRight: '770px', marginTop: '-250px'}}/>
            </RightAligned>

            <MiddleAligned style={{ marginTop: '60px'}}>
                <BackgroundWhite>
                    
                    <ColorWord>Our interface will feature simple and familiar design elements so that our user can have a quick, smooth experience receiving a satisfying route.</ColorWord>
                    
                </BackgroundWhite>
                
            </MiddleAligned>

            <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>e. System Model</ColorWord></h2>

                <p className='project-body' style={{ marginTop: '35px' }}>
                The initial system used a wizard-of-oz style <br/>
                prototype, where the tester acted as the route <br/>
                generation algorithm. We learned that this was <br/>
                computationally expensive for the tester and limited <br/>
                our ability to customize to user preferences. These <br/>
                findings led us to focus on collecting a database of <br/>
                subroutes that the tester could concatenate together <br/>
                to create a better tailored route for the user.
                </p>
                
                <img src={images.blackBox} alt="project" width={600} height={350} style={{marginLeft: '800px', marginTop: '-200px'}}/>
            </div>

            <RightBox>
                <BackgroundWhite>
                    
                    <ColorWord>Our system will index a database of routes based on the user’s preferences in an attempt to find a route which is a best fit for the user.</ColorWord>
                    
                </BackgroundWhite>
                
            </RightBox>
            <img src={images.blackBox} alt="project" width={600} height={350} style={{marginLeft: '37px', marginTop: '-200px'}}/>

            <h3 className='source-code-pro-footer'>
            Contact me at: <br/><br/>
            email: <a href='mailto:sarahsawyer2024@u.northwestern.edu' className='email-link'>sarahsawyer2024@u.northwestern.edu</a> <br/><br/>
            or connect with me on <a href='https://www.linkedin.com/in/sarah-sawyer-5541a81a9/' className='email-link'>LinkedIn</a>
        
            </h3>
        </div>

        
    )
}
export default PedalPilot;