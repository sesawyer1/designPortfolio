import styled from "styled-components"


const ProjectTile = ({title, subtitle, image}) => {

   
    return (
        <ProjectTileContainer>
            <img src={image} alt="project" width={300} height={300}/>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            
        </ProjectTileContainer>
    )
}

const Title = styled.h1`
    font-size: 25px;
    font-weight: 400;
    color: black;
    margin-left: 0px;
    margin-top: 0px;

`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color: black;
    margin-top: -10px;
    margin-left: 0px;
    
`

const ProjectTileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 17px;
`

export default ProjectTile;