import React from 'react'
import styled from  'styled-components'
import {useHistory} from 'react-router-dom'

const CountryStyled= styled.div`
    cursor:pointer;
    text-align:left;
    border-radius:5px;
    box-shadow:0 0 7px 2px rgba(0,0,0,.15);
    
    &:hover .details{
        border:1px solid var(--black);
        border-radius:0 0 5px 5px;
        border-top:none;
    }
    img{
        width: 100% ;
        height: 160px;
        object-fit:cover;
        border-radius: 5px 5px 0 0;
        vertical-align:top;
        
    }
    .details{
        padding: 1.5em;
        border: 1px solid transparent;
        border-top: none;
        transition: .2s border;
        background: var(--white);
    }
    h2{
        margin:0px;
        margin-bottom:1rem;
        font-size:18px;
        font-weight:700;
    }
    p{
        font-size:.9em;
        margin-bottom:0.5rem;
    }
`   
    



function Country({flag,name,population,region,capital}) {
    
     const history=useHistory()
    const handleClick=()=>{
        history.push(`/country/${name}`)
    }
    return (
        <CountryStyled onClick={handleClick}> 
            
            <img loading="lazy" src={flag} alt="flag img"/>
            <div className="details">
                <h2>{name}</h2>
                <p><strong>Population: </strong>{population}</p>
                <p><strong>Region: </strong>{region}</p>
                <p><strong>Capital: </strong>{capital}</p>
            </div>
            


        </CountryStyled>
    )
}

export default Country
