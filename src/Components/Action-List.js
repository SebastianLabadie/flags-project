import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import { Region as FilterByRegion } from './Region'
import Wrapper from './Wrapper'

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    padding:0 1rem;  

  }

  @media screen and (min-width:768px){
    .grid{
      grid-template-columns: 480px 1fr 200px
    }
  }
`

function ActionList() {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <span></span>
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionListStyled>
  )
}

export default ActionList
