import styled from "styled-components"

const HighFi = ({title, image}) => {
    return (
        <ProjectTileContainer>
            <img src={image} alt="project" width={160} height={360}/>
            <Title>{title}</Title>
            
        </ProjectTileContainer>
    )
}

const Title = styled.h1`
    font-size: 15px;
    font-weight: 400;
    color: black;
    margin-top: 10px;
    text-align: center;

`


const ProjectTileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 17px;
`

export default HighFi;