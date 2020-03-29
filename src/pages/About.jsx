import React from 'react';
import {Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: black;
  color: white;
  padding: 10px;
  text-align: ${props => props.textalign ? `${props.textalign}` : 'center'};
  min-height: ${props => props.minheight ? `${props.minheight}` : '100vh'};
`;

function About (){

    return (
        <StyledDiv>
            <h2>Descriere proiect</h2>

            <StyledDiv minheight={"50vh"} textalign={"left"}>            
                <ul>
                    <li>Adăugați două proprietăți noi pentru fiecare user: salariu și imagine. Dați valori pentru acestea și afișați-le pe ecran"</li>
                    <li>Adăugați un nou input de tip culoare. La schimbarea culorii lui, culoarea textului pentru întreaga aplicație se va schimba.</li>
                    <li>Creați două componente noi, numite PostList și PostItem. PostList va fi o listă de componente de tip PostItem. În componenta PostList, atunci când este afișată pe ecran, faceți un request catre endpoint-ul /posts, de pe JSON placeholder, afișând datele preluate. Practic, o singură dată veți face request către url-ul https://jsonplaceholder.typicode.com/posts.</li>
                    <li>Creați două butoane: Afișează useri și Afișează postări. Implicit, vor fi afișați userii. La click pe oricare din cele două butoane, va fi actualizată lista afișată pe ecran. Dacă dăm click pe butonul Afișează useri va fi afișată lista userilor, dacă dăm click pe Afișează postări va fi afișată lista postărilor.</li>
                    <li>Adăugați pe fiecare user un buton de ștergere.</li>
                    <li>Faceți puțină validare a datelor. Spre exemplu, să nu poată fi introdus un nume gol, iar emailul să conțină caracterele '@' și '.' .</li>
                    <li>Stilizați aplicația, astfel încât să arate mai frumos.</li>
                </ul>
            </StyledDiv>
            <label>Home page: </label>
            <Link to="/">Home</Link>
        </StyledDiv>
       
    );
}

export default About;