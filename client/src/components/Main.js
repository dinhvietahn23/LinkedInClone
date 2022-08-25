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

export default function Main() {
  const [indexReact, setIndexReact] = useState(null);
  const [openImage, setOpenImage] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const reactDescription = [
    "Like",
    "Favorite",
    "Hmmm",
    "Clap",
    "Thinking",
    "Tym",
  ];
  const imgLink = [
    "https://images.unsplash.com/photo-1659456553707-14712bb27032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1659686353939-dd23ea1a310f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1659625945776-121a1f4bd246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    "https://images.unsplash.com/photo-1659629413054-0d3382caf846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1659670990184-50615e69e639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1659481670260-8daaa0a7e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  ];
  const [openPost, setOpenPost] = useState(false);

  return (
    <div>
      <ShareBox>
        <ShareTop>
          <Avatar src="https://images.unsplash.com/photo-1659462248396-3cd5943be032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          <PostText
            placeholder="Start a post"
            onClick={() => setOpenPost(true)}
          />
        </ShareTop>
        <ShareBottom>
          <div>
            <InsertPhotoIcon htmlColor="skyblue" />
            <span>Photo</span>
          </div>
          <div>
            <YouTubeIcon htmlColor="green" />
            <span>Video</span>
          </div>
          <div>
            <EventNoteIcon htmlColor="goldenrod" />
            <span>Event</span>
          </div>
          <div>
            <NotesIcon htmlColor="tomato" />
            <span>Write article</span>
          </div>
        </ShareBottom>
        {openPost && <PostModal setOpenPost={setOpenPost} />}
      </ShareBox>

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
          <img src="https://images.unsplash.com/photo-1659534983100-41d1c82fc155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" />
        </PostCenter>
        <PostReact>
          <div>
            <span>29 likes</span>
          </div>
          <div>
            <span>1 comment - </span>
            <spanm>1 share</spanm>
          </div>
        </PostReact>
        <PostBottom>
          <div>
            <ThumbUpIcon />
            <span>Like</span>
          </div>
          <div>
            <CommentIcon />
            <span>Comment</span>
          </div>
          <div>
            <ReplyIcon />
            <span>Share</span>
          </div>
          <div>
            <SendIcon />
            <span>Send</span>
          </div>
        </PostBottom>
      </Post>

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
          <PostGrid>
            {imgLink
              .filter((img) => imgLink.indexOf(img) < 4)
              .map((img) => (
                <span>
                  <img
                    src={img}
                    onClick={() => {
                      setOpenImage(true);
                      setImageSelected(img);
                    }}
                  />
                  {<Counter><p>{imgLink.indexOf(img)+1===4?`+7`:``}</p></Counter>}
                </span>
              ))}
          </PostGrid>
          {openImage && <ImagePost image={imageSelected} listImage={imgLink} />}
          {/* <img src="https://images.unsplash.com/photo-1659534983100-41d1c82fc155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" /> */}
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
    </div>
  );
}

const ShareBox = styled.div`
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const ShareTop = styled.div`
  display: flex;
  align-items: center;
`;

const ShareBottom = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  div {
    cursor: pointer;
    color: grey;
    font-weight: bold;
    padding: 10px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
      border-radius: 5px;
    }
    span {
      margin-left: 10px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 5px;
    }
  }
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const PostText = styled.input`
  border: 2px solid grey;
  width: calc(100% - 70px);
  border-radius: 30px;
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  &:focus {
    outline: none;
  }
`;

const Post = styled.div`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  padding: 10px 20px;
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
          &:first-child {
            font-size: 20px;
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
  span {
    line-height: 1.5;
    letter-spacing: 1.02px;
  }

  & > img {
    width: 100%;
    object-fit: fill;
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
  bottom: 0;
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
  padding: 20px 30px;
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

const PostGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 2px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Counter = styled.div`
    position: absolute;
    bottom: 20%;
    right: 20%;
    font-size: 30px;
    color: #fff;
`