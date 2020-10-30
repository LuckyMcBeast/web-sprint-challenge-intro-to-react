// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharCard = styled.section`
    display: flex;
    background: #04b0c8;
    width: 50em;
    margin: 2em auto;
    border: 30px solid #04b0c8;
    border-radius: 30px;
    box-shadow: 1px 1px 20px #35ccaf;
`;

const ImgDiv = styled.div`
    width: 25rem;
    margin-left: 0;
    text-align: left;
`

const CharImg = styled.img`
    border: 3px solid #124d4f;
    border-radius: 30px;
`;

const AttrDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: auto 2rem auto 0;
    text-align: left;
`;

const Name = styled.h2`
    font-size: 2.5rem;
    margin: 0;
`;

export default function Character(props) {
    const { data } = props;
    if (data === null) {
        return (
            <h2>LOADING...</h2>
        )
    }
    else {
        return(
            <CharCard>
                <ImgDiv>
                    <CharImg src={data.image}></CharImg>
                </ImgDiv>
                <AttrDiv>
                    <Name>{data.name}</Name>
                    <h3>{`Species: ${data.species}`}</h3>
                    <h3>{`Origin: ${data.origin.name}`}</h3>
                    <h3>{`Location: ${data.location.name}`}</h3>
                    <h3>{`Number of Episodes: ${data.episode.length}`}</h3>
                    <h3>{`Status: ${data.status}`}</h3>
                </AttrDiv>
            </CharCard>
        )
        
    }
}