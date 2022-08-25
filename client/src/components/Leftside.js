import React from "react";
import styled from "styled-components";

export default function Leftside() {
  return (
    <Container>
      <ArtCard>
        <Profile>
          <UserInfo>
            <BackgroundCover src="/images/card-bg.svg" />
            <Photo src="/images/photo.svg" />
          </UserInfo>
          <Link>Welcome, there!</Link>
          <a href="#">
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </Profile>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>

      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="images/plus-icon.svg"/>
          </span>
        </a>
        <a>
          <span>Followed Hastags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
  height: 100%;
  a {
    text-decoration: none;
  };
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.08);

  /* div{
    border-bottom: 1px solid grey;
  } */
`;

const Profile = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.08);
`;
const UserInfo = styled.div`
  position: relative;
  height: 100px;
`;

const BackgroundCover = styled.img`
  width: 100%;
  height: 54px;
  object-fit: cover;
`;

const Photo = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: fill;
  position: absolute;
  top: 10px;
  right: 0;
  left: 0;
  margin: auto;
  border: 2px solid white;
  background-color: grey;
  /* object-fit: cover; */
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Widget = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
;
  a {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 14px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:last-chile {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;

const Item = styled.div`
  text-align: left;
  padding: 12px;
  font-size: 14px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`

const CommunityCard = styled(ArtCard) `
  margin-top: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  color: #0a66c2;
  position: sticky;
  top:70px;
  a {
    cursor: pointer;
    padding: 4px 12px 4px 12px;
    font-size: 14px;
    &:hover {
      color: #0a66c2;
      text-decoration: underline;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        height: 25px;
        width: 25px;
        border-radius: 50%;
        &:hover {
          background-color: rgba(0, 0, 0, 0.06);
        }
      }
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      font-weight: bold;
      border-top: 1px solid rgba(0,0,0,0.08);
      padding: 12px;
      text-align: center;
      span{
        width: 100%;
        display: inline;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }

`
