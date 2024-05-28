import React from 'react';
import styled from 'styled-components';
import {images} from '../images/images';

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 375px;
  width: 612px; 
  margin-top: -407px;
  margin-left: 600px;
  background-color: black;
`;


const Video = styled.video`
  max-width: 600px;
  max-height: 100%;
  object-fit: contain;
`;


const VideoComponent = () => {
    return (
        <VideoContainer>
            <Video autoPlay loop muted>
                <source src={images.EElevel} type='video/mp4'/>
            </Video>
        </VideoContainer>
      
    );
};

export default VideoComponent;