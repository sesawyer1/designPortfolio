import '../App.css';
import React from 'react';
import styled from "styled-components"
import { images } from '../images/images';
import { Grid } from '../pages/Projects';
import PersonaTile from '../components/PersonaTile';
import HighFi from '../components/HighFi';
import Carousel from '../components/Carousel';

const ColorWord = styled.span`
    color: #FF7400;`


const RightAligned = styled.div`
    text-align: right;
    margin-right: 30px;`

const FinalContainer = styled.div`
    display: flex;
    justify-content: space-around; /* Distributes space between tiles */
    flex-wrap: nowrap; /* Prevents wrapping to a new line */
    gap: 10px; /* Optional: adds space between tiles */
`

const Underground = () => {
    return (
        <div>
            
            <div>
                <div>
                <h1 className='header-projects'>Let's explore the <ColorWord>underground</ColorWord></h1>
                <p className='project-sub-header'>
                    A social media platform connecting artists <br/>
                    exhibitions, and viewers <br/>
                </p>

                <p className='project-body' style={{ marginTop: '80px' }}>
                    June 2023 - Aug 2023 <br/>
                </p>

                <p className='project-body' style={{ marginTop: '-10px' }}>
                    <b>Skills:</b> User Research, UX/UI Design, <br/> 
                    Human Computer Interaction
                </p>

                <p className='project-body' style={{ marginTop: '40px' }}>
                Key Steps: <br/><br/>
                <ColorWord>
                a. Personas and Scenarios <br/>
                b. Low-Fidelity Prototype <br/>
                c. User Feedback <br/>
                d. High-Fidelity Prototype <br/>
                </ColorWord>
            
                </p>
            </div>

            <div style={{marginLeft: '-12px', marginTop:'-432px'}}>
                <Carousel/>
            </div>
                
                
            </div>

            <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>a. Personas and Scenarios</ColorWord></h2>

                <Grid>
                    <PersonaTile image={images.head} title="User A: Recent College Graduate" subtitle="a. Wants to learn about museum events they can attend in a new city" sub2="b. Interested in learning about the history of the country where they are now living"/>
                    <PersonaTile image={images.head} title="User B: College Sophomore" subtitle="a. Eager to find galleries in nearby city" sub2="b. Wants to identify and learn about local artists"/>
                    <PersonaTile image={images.head} title="User C: Social Traveler" subtitle="a. Interested in planning what key pieces to see at each museum they visit" sub2="b. Learn about other recommended art sites in each city"/>
                </Grid>
                
            </div>

            <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>b. Low-Fidelity Prototype</ColorWord></h2>
                <img src={images.lowFi2} alt="project" width={450} height={600} style={{marginLeft: '150px', marginTop: '20px'}}/>
                <RightAligned style={{marginTop: '-515px', marginRight: '160px'}}>
                    
                    <p>
                    Search Page: Users can search for cities or <br/>
                    specific locations and have the option to filter <br/>
                    for type of location (museum, gallery, etc.).
                    </p>

                    <p style={{ marginTop: '210px'}}>
                    Near Me Page: Users can filter based on their <br/>
                    location to see recommendations in their area and <br/>
                    learn more about each of the suggestions.
                    </p>
                </RightAligned>

                <div style={{marginTop: '200px', marginLeft: '160px'}}>
                    <p>
                    Profile Page: Users can post photos from their<br/>
                    visits and mark places as favorites to be viewed <br/>
                    in a map format.  
                    </p>

                    <p style={{ marginTop: '210px'}}>
                    Friends Page: Users have the choice to “friend” <br/>
                    others and see their posts in a scrolling feed.
                    </p>
                </div>

                <img src={images.lowFi1} alt="project" width={450} height={600} style={{marginLeft: '845px', marginTop: '-450px'}}/>
                
                
            </div>

            <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>c. User Feedback</ColorWord></h2>

                <p style={{marginLeft: '30px'}}>
                In conducting interviews based on the personas and the initial <br/>
                prototype, I learned that: <br/><br/>

                a. Users were more interested in learning about smaller, <br/>
                local museums or galleries, rather than common <br/>
                institutions. They felt like they could use Google for <br/>
                larger recommendations, but would use a platform like this <br/>
                for more local spots.<br/><br/>
                b. Users wanted to learn more specifically about the artist <br/>
                and their work. They hoped to be able to read a summary <br/>
                of the artist, see a few key pieces of work, and identify <br/>
                where to travel to see that work. 
                </p>
            </div>

            <div>
                <h2 className='project-sub-header' style={{ marginTop: '78px' }}><ColorWord>d. High-Fidelity Prototype</ColorWord></h2>
                <FinalContainer>
                    <HighFi image={images.profile1} title={"Profile Page"}/>
                    <HighFi image={images.profile2} title={"Profile Page"}/>
                    <HighFi image={images.nearMe} title={"Near Me Page"}/>
                    <HighFi image={images.learnMore} title={"Learn More Page"}/>
                    <HighFi image={images.friends} title={"Friends Page"}/>
                </FinalContainer>
            </div>

            <h3 className='source-code-pro-footer'>
            Contact me at: <br/><br/>
            email: <a href='mailto:sarahsawyer2024@u.northwestern.edu' className='email-link'>sarahsawyer2024@u.northwestern.edu</a> <br/><br/>
            or connect with me on <a href='https://www.linkedin.com/in/sarah-sawyer-5541a81a9/' className='email-link'>LinkedIn</a>
        
            </h3>

        </div>
    )
}
export default Underground;