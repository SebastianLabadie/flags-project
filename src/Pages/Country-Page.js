import React,{useState,useEffect} from 'react'
import styled from  'styled-components'
import {useSelector} from 'react-redux'
import CountrySelected from '../Components/CountrySelected'
import Wrapper from '../Components/Wrapper'

const CountryPageStyled= styled.div`
.back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    padding: .7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`

const CountryPage = ({match,history }) => {
    let DBcountry = useSelector(state => state.countryList.find(item => item.alpha2Code === match.params.id))
    const [country,setCountry] =useState(DBcountry);
    
    useEffect(()=>{
      if (!country) {
        fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id.toLowerCase()}`)
          .then((response) => response.json())
          .then((data) => {
            setCountry(data)
          })
      }
    },[country,match.params.id])
    

   const handleClick= () => {
        history.goBack()
      }

    return (
        <Wrapper>
            <CountryPageStyled >
            <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
                <CountrySelected {...country} />
            </CountryPageStyled>
        </Wrapper>
    )
}

export default CountryPage
