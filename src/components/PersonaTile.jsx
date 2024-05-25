import styled from "styled-components"

const PersonaTile = ({title, subtitle, sub2, image}) => {
    return (
        <ProjectTileContainer>
            <img src={image} alt="project" width={250} height={250}/>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <SubTitle>{sub2}</SubTitle>
            
        </ProjectTileContainer>
    )
}

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    color: black;
    margin-left: 0px;
    margin-top: 0px;

`

const SubTitle = styled.h2`
    font-size: 15px;
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

export default PersonaTile;