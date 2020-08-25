import React from 'react'
import styled from  'styled-components'

const CountryPageStyled= styled.div`

`

const CountryPage = ({match}) => {
    return (
        <CountryPageStyled>
            <h1>{match.params.name}</h1>
        </CountryPageStyled>
    )
}

export default CountryPage
