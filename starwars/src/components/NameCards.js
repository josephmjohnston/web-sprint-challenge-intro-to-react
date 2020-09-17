import React from 'react';
// import './index.css';
import styled from 'styled-components'


const WrapperDiv = styled.div`
color: black;
text-align: center;
display: flex;
justify-content: space-between;
`;

function NameCards(props){
    console.log('props:', props)
    const {name, birthday} = props
    return (
        <WrapperDiv>
        <h1>{`${name}`} </h1>
         <h2> {`${birthday} `} </h2>
        </WrapperDiv>
    )
}

export default NameCards