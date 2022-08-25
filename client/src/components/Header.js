import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  background-color: white;
  padding: 0 24px;
  /* position: fixed; */
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  max-width: 1128px;
  margin: auto;
`;

const Logo = styled.span`
  margin-right: 8px;
`;
const Search = styled.div`
  position: relative;
  div:first-child {
    max-width: 280px;
    input {
      border: none;
      background-color: #eef3f8;
      border-radius: 4px;
      width: 218px;
      height: 35px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-size: 14px;
    }
  }

  div:last-child {
    position: absolute;
    top: 5px;
    left: 10px;
    display: flex;
    align-items: center;
  }
  
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    /* visibility: hidden; */
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

const NavListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: white;
`;

const NavList = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 0 15px;
  color: rgba(0, 0, 0, 0.3);

  /* &::after {
    content: '';
    position: absolute;
    height: 5px;
    background-color: black;
    width: 100%;
    bottom: 0;
    transform-origin:center;
    transform: scaleX(0);
    transition: all 200ms ease-in-out;
  } */

  &:hover span {
    color: rgba(0, 0, 0, 0.8);
  }

  /* &:hover:after{
    transform: scaleX(1);
  } */

  .active:after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Counter = styled.div`
  /* background-color: red; */
  display: flex;
  div{
    background-color: red;
    border-radius: 50%;
    width: 15px;
    height:15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right:35px;
    color:white;
  }
`

const SignOut = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  bottom: -40px;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  visibility: hidden;
  opacity: 0;
  transition: all 200ms ease-in-out;
`;

const User = styled(NavList)`
  img:first-child {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    ${SignOut} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" />
          </a>
        </Logo>
        <Search>
          <div>
            <input placeholder="Search..." type="text" />
          </div>
          <div>
            <SearchIcon />
          </div>
        </Search>
        <Nav>
          <NavListWrapper>
            <NavList>
              <img src="/images/nav-home.svg" alt="" />
              <span>Home</span>
            </NavList>

            <NavList>
              <img src="/images/nav-network.svg" alt="" />
              <span>My Network</span>
            </NavList>

            <NavList>
              <img src="/images/nav-jobs.svg" alt="" />
              <span>Jobs</span>
            </NavList>

            <NavList>
              <img src="/images/nav-messaging.svg" alt="" />
              <span>Messaging</span>
            </NavList>

            <NavList>
              <Counter>
                <img src="/images/nav-notifications.svg" alt="" />
                <div>2</div>
              </Counter>
              <span>Notifications</span>
            </NavList>

            <User>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </div>

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <div>
                  <span>Work</span>
                  <img src="/images/down-icon.svg" alt="" />
                </div>
              </a>
            </Work>
          </NavListWrapper>
        </Nav>
      </Content>
    </Container>
  );
}
