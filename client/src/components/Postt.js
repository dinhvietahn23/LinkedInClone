import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NotesIcon from "@mui/icons-material/Notes";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import PostModal from "./PostModal";
import ImagePost from "./ImagePost";

export default function Postt() {
  const [indexReact, setIndexReact] = useState(null);
  const reactDescription = [
    "Like",
    "Favorite",
    "Hmmm",
    "Clap",
    "Thinking",
    "Tym",
  ];
  return (
      <Post>
        <PostTop>
          <div>
            <Avatar
              src="https://images.unsplash.com/photo-1657299143020-4f4bbf05174d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80"
              alt=""
            />
            <div>
              <span>Company</span>
              <span>103, 322 followers</span>
              <span>2w ago</span>
            </div>
          </div>
          <div>
            <MoreHorizIcon htmlColor="grey" />
          </div>
        </PostTop>

        <PostCenter>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            malesuada mi, at posuere lectus. Nullam quis laoreet nulla. Aliquam
            gravida orci nec mi convallis cursus. Aenean sapien quam, pharetra
            quis felis id, laoreet euismod erat. Vestibulum aliquet nisl ut eros
            rhoncus, in malesuada velit volutpat. Maecenas mauris diam, laoreet
            vel sagittis id, lacinia at tortor. Sed consectetur, nisl sed rutrum
            feugiat, ligula est vestibulum est, ut elementum nisi velit vel
            urna. Sed dapibus eget enim quis ultrices. Quisque elementum pretium
            orci, id commodo ante pulvinar vitae. Nullam nisl urna, egestas eu
            lorem sed, hendrerit molestie tellus. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
            id turpis consectetur, varius libero nec, gravida lorem.
          </span>
        </PostCenter>

        <PostReact>
          <div>
            <span>29 likes</span>
          </div>
          <div>
            <span>1 comment - </span>
            <span>1 share</span>
          </div>
        </PostReact>

        <PostBottom>
          <PostBottomItem>
            <ReactComponent>
              <div>
                <ReactItem>
                  <ReactDesc>{reactDescription[indexReact]}</ReactDesc>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                    width="40px"
                    height="40px"
                    onMouseEnter={() => setIndexReact(0)}
                  />
                </ReactItem>
                <ReactItem>
                  <ReactDesc>{reactDescription[indexReact]}</ReactDesc>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
                    width="40px"
                    height="40px"
                    onMouseEnter={() => setIndexReact(1)}
                  />
                </ReactItem>
                <ReactItem>
                  <ReactDesc>{reactDescription[indexReact]}</ReactDesc>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/4rw9bhaoyh1622ce65fshynuw"
                    width="40px"
                    height="40px"
                    onMouseEnter={() => setIndexReact(2)}
                  />
                </ReactItem>
                <ReactItem>
                  <ReactDesc>{reactDescription[indexReact]}</ReactDesc>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/cm8d2ytayynyhw5ieaare0tl3"
                    width="40px"
                    height="40px"
                    onMouseEnter={() => setIndexReact(3)}
                  />
                </ReactItem>
                <ReactItem>
                  <ReactDesc>{reactDescription[indexReact]}</ReactDesc>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus"
                    width="40px"
                    height="40px"
                    onMouseEnter={() => setIndexReact(4)}
                  />
                </ReactItem>
                <ReactItem>
                  <ReactDesc>{reactDescription[indexReact]}</ReactDesc>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/e1vzxs43e7ryd6jfvu7naocd2"
                    width="40px"
                    height="40px"
                    onMouseEnter={() => setIndexReact(5)}
                  />
                </ReactItem>
              </div>
              <div></div>
            </ReactComponent>
            <ThumbUpIcon />
            <span>Like</span>
          </PostBottomItem>
          <PostBottomItem>
            <CommentIcon />
            <span>Comment</span>
          </PostBottomItem>
          <PostBottomItem>
            <ReplyIcon />
            <span>Share</span>
          </PostBottomItem>
          <PostBottomItem>
            <SendIcon />
            <span>Send</span>
          </PostBottomItem>
        </PostBottom>
      </Post>
  );
}

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const Post = styled.div`
  background-color: #fff;
  padding: 10px;
`;

const PostTop = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    &:first-child {
      display: flex;
      div {
        display: flex;
        flex-direction: column;
        span {
          color: rgba(0, 0, 0, 0.5);
          font-size: 12px;
          &:first-child {
            font-size: 15px;
            font-weight: bold;
            color: black;
          }
        }
      }
    }
  }
`;

const PostCenter = styled.div`
  margin-top: 10px;
  &>span{
    font-size: 12px;
    letter-spacing: 0;
    line-height: 0;
  }
`;

const PostReact = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
`;

const ReactItem = styled.a``;

const ReactDesc = styled.p`
  background-color: #fff;
  padding: 5px;
`;

const ReactComponent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -40px;
  left: -40px;
  display: flex;
  width: 300px;
  height: 80px;
  justify-content: space-between;
  margin-bottom: 70px;
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;

  div {
    &:last-child {
      width: 300px;
      height: 30px;
      background-color: red;
      opacity: 0;
    }
    &:first-child {
      position: relative;
      background-color: #fff;
      height: 50px;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 5px 5px black;
      ${ReactItem} {
        position: relative;
        width: 40px;
        height: 40px;
        transition: all 0.2s ease;
        ${ReactDesc} {
          position: absolute;
          top: -20px;
          left: 50%; /* position the left edge of the element at the middle of the parent */
          transform: translate(-50%, -50%);
          color: black;
          opacity: 0;
          visibility: hidden;
          width: auto;
        }
        &:hover {
          transform: translateY(-5px) scale(1.2);
          ${ReactDesc} {
            opacity: 1;
            visibility: visible;
            border-radius: 5px;
          }
        }
      }
      /* margin-bottom: 0px; */
    }
  }
`;

const PostBottom = styled.div`
  position: relative;
  padding: 10px 10px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  /* div {
    /* position: relative; */
`;

const scaleItem = keyframes`
    to{
        transform: scale(1.2);
    };
`;
const PostBottomItem = styled.div`
  padding: 5px 5px;
  display: flex;
  align-items: center;
  color: grey;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }
  &:first-child:hover {
    ${ReactComponent} {
      opacity: 1;
      visibility: visible;
      img {
        transition: 500ms;
        animation: ${scaleItem} 0.5s 2 alternate ease-in-out;
      }
    }
  }
`;
