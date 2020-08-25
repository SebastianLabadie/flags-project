import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1px;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 15px;
  .content {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
  }
  h1 {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: var(--dark);
  }
  .dark-mode {
    cursor:pointer;
    .moon {
      display: inline-flex;
      transform: rotate(-25deg);
      margin-right: 15px;
    }
    p{
        font-size: 12px;
        font-weight:600;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3em;

    h1 {
      font-size: 24px;
    }
    .dark-mode {
        p{
        font-size: 16px;
    }
    }
  }
`;

const Header = ({setDarkMode,darkMode}) => {
  const handleClick = (e) => {
    setDarkMode(!darkMode)
  };

  return (
    <HeaderStyled>
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
  );
};

export default Header;
