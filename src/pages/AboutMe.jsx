import '../App.css';

import React from 'react';
import styled from "styled-components"

const Description = styled.div`
display: flex;
justify-content: space-between;
align-items: left;
margin-top: 44px;
margin-left: 685px;
`

const Ending = styled.div`
display: flex;
justify-content: space-between;
align-items: left;
margin-top: -78px;
margin-left: 90px;
`

const ImagePlace = styled.div`
display: flex;
margin-top: -570px;
margin-left: 150px;
margin-bottom: 90px;
`

const AboutMe = () => {
    return (
        <div>
            <Description>
                <p className='about-text'> 
                Hi, I'm Sarah. <br/> <br/>

                As someone who enjoys finding new areas in which I can <br/>challenge myself, I am studying Computer Science, <br/>
                Economics, and Human-Centered Design at Northwestern <br/>University. I will be continuing my education in the fall <br/>
                at Columbia University with a Master’s of Science<br/> in Financial Engineering. <br/> <br/>

                My interest in the intersection of technology and <br/>creativity has been bolstered by my work with the SONIC<br/> Research Group. 
                As a Data Science Intern, I have<br/> researched the impacts of different authors and genres<br/> on the future success of a patent. 
                Working in an<br/> unfamiliar setting, such as patent data, has allowed me<br/> to work on breaking down challenges into manageable<br/> 
                problems to identify my pain points or areas in which I<br/> can improve upon the project. <br/><br/>
                
                Outside of school and work, you can find me<br/> outdoors! Living in Colorado has instilled a love<br/> of hiking, skiing, and cycling in 
                me. If you are<br/> interested in working with me or learning more<br/> about my background, please reach out! I am happy<br/> to 
                connect over an oat milk latte. <br/><br/>

                </p>

            </Description>

            <ImagePlace><img src='/headshot.png' alt="project" width={400} height={400}/></ImagePlace>
            
            <Ending>
                <p className='about-text' style={{marginTop: '15px'}}>
                    my email is <a href='mailto:sarahsawyer2024@u.northwestern.edu' className='email-link'>sarahsawyer2024@u.northwestern.edu </a> 
                     or <br/><br/>connect with me on <a href='https://www.linkedin.com/in/sarah-sawyer-5541a81a9/' className='email-link'>LinkedIn</a>

                </p>
                
            </Ending>

            
        </div>
        
    )
};

export default AboutMe;