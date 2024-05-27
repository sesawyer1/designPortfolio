import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 415px;
  width: 612px; 
  margin-top: -407px;
  margin-left: 600px;
  background-color: black;
`;


const Video = styled.video`
  max-width: 500px;
  max-height: 100%;
  object-fit: contain;
`;


const VideoComponent = () => {
    return (
        <VideoContainer>
            <Video autoPlay loop muted>
                <source src='public/EERunThrough.mov' type='video/quicktime'/>
            </Video>
        </VideoContainer>
    );
};

export default VideoComponent;