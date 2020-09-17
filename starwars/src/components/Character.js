import React from 'react';
import NameCards from './NameCards'
import styled from 'styled-components'

const WrapperDiv = styled.div`
color: red;
text-align: center;
`;

function Character(props){
    console.log('props:', props)
    const {data} = props
    console.log(data)
    return (
        <WrapperDiv>
    {data.map((element, index)=>{
      return ( <NameCards key = {index} name={element.name} birthday={element.birth_year} />)
    })}
    </WrapperDiv>
    )
}

export default Character