import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import {Link} from 'react-router-dom'
const HeaderStyled = styled.div`
        background:var(--white);
        margin-bottom:1px;
       
        box-shadow:0 2px 4px 0 rgba(0,0,0,0.08) ;
        margin-bottom:15px;
        .content{
        display:flex;
        justify-content:space-between;
        height:80px;
        align-items:center;
    }
    h1{
        font-size:14px;
    }
    .dark-mode {
        font-size:13px;
        .moon{
            display:inline-flex;
            transform:rotate(-25deg);
            margin-right:15px;
            
        }
    }
`



const Header = () => {

    const handleClick=(e)=>{

    }

    return (
        <HeaderStyled > 
            <Wrapper> 
        <div className="content">
            <Link to="/">
                <h1>Where in the world?</h1> 
            </Link>
        
        <div className="dark-mode">
            <p onClick={handleClick}>
                <i className="far fa-moon moon"></i>
                Dark Mode
            </p>
        </div>

        </div>

            </Wrapper>
        </HeaderStyled>
    )
}

export default Header
