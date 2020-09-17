import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from "./Character";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: horizontal;
    flex-wrap: wrap;
`
const CharacterList4 = props => {
    const [characters, setCharacters] = useState([]);

    useEffect (() => {
        axios
            .get(`https://swapi.dev/api/people/?page=4`)
            .then(res => {
                console.log ("Res from useEffect of Character", res);
                setCharacters(res.data.results);
            })
            .catch (err => {
                console.log ("Error occured in UseEffect of Character", err);
            });
    }, []);

    return(
        <Container>
            {characters.map (info => {
                return (
                    <Character
                    name = {info.name}
                    height = {info.height} 
                    mass = {info.mass} 
                    skin_color = {info.skin_color}
                    hair_color = {info.hair_color}
                    eye_color = {info.eye_color}
                    birth_year = {info.birth_year}
                    gender = {info.gender}

                    />
                );
            })}
        </Container>
    );
}

export default CharacterList4;