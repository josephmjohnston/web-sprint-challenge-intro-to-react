import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const WrapperDiv = styled.div`
color: red;
text-align: center;
`;

const App = () => {

const [data, setData] = useState([])


useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
  .then((res) => {
    setData(res.data.results)
    console.log(res.data.results)

  
  })
  .catch((err)=>{
    console.log(err);
  })

}, [])

return (
  <WrapperDiv>
    
      <Character data = {data}/>
   
  </WrapperDiv>
);
}

export default App;