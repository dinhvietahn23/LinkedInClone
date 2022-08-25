import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Rightside() {
  return (
    <Container>
      <FollowerCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" />
        </Title>
        <FeedList>
          <li>
            <Avatar src="https://images.unsplash.com/photo-1659394754299-26e8172a1d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            <div>
              <span>Ahn</span>
              <span>Student at Vietnam National University</span>
              <Button>
                <AddIcon />
                Follow
              </Button>
            </div>
          </li>
          <li>
            <Avatar src="https://images.unsplash.com/photo-1659394754299-26e8172a1d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            <div>
              <span>Ahn</span>
              <span>Student at Vietnam National University</span>
              <Button>
                <AddIcon />
                Follow
              </Button>
            </div>
          </li>
          <li>
            <Avatar src="https://images.unsplash.com/photo-1659394754299-26e8172a1d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            <div>
              <span>Ahn</span>
              <span>Student at Vietnam National University</span>
              <Button>
                <AddIcon /> Follow
              </Button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <ArrowForwardIcon />
        </Recommendation>
      </FollowerCard>
      <FooterAll>
        <BannerCard>
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt=""
          />
        </BannerCard>
        <Footer>
          <span>About</span>
          <span>Accessibility</span>
          <span>Help Center</span>
          <span>
            Privacy and Term <KeyboardArrowDownIcon />
          </span>
          <span>Ad Choices</span>
          <span>Advertising</span>
          <span>
            Business Services <KeyboardArrowDownIcon />
          </span>
          <span>Get the LinkedIn app</span>
          <span>More</span>
        </Footer>
        <Authen>
          <img src="/images/login-logo.svg" />
          LinkedIn Corporation © 2022
        </Authen>
      </FooterAll>
    </Container>
  );
}



const Container = styled.div`
  height: 100%;
`;
const FollowerCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 12px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FeedList = styled.ul`
  margin-top: 10px;
  list-style: none;
  li {
    display: flex;
    /* justify-content: space-between; */
    margin-bottom: 10px;
    div {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 5px;
        &:first-child {
          font-weight: bold;
        }
        &:nth-child(2) {
          font-size: 12px;
        }
      }
    }
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const Button = styled.button`
  /* height: 100%; */
  /* width: 100%; */
  border: 1px solid grey;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border: 2px solid grey;
  }
`;
const Recommendation = styled.a`
  color: grey;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  padding: 2px 5px;
  width: 200px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

const FooterAll = styled.div`
  position: sticky;
  top: 70px;
`;

const BannerCard = styled.div`
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  /* padding: 0px 12px; */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  img {
    width: 95%;
    height: 100%;
    object-fit: fill;
  }
`;

const Footer = styled.div`
  padding: 20px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: 30px;
  span {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(4) {
      grid-column: 1/3;
    }
    &:nth-child(7) {
      grid-column: 2/4;
    }
    &:nth-child(8) {
      grid-column: 1/3;
    }
    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }
`;
const Authen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding-bottom: 50px;

  img {
    width: 90px;
    margin-right: 10px;
    color: blue;
  }
`;
