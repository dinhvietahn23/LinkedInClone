import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArticleIcon from "@mui/icons-material/Article";
import WorkIcon from "@mui/icons-material/Work";
import PollIcon from "@mui/icons-material/Poll";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import CommentIcon from "@mui/icons-material/Comment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function PostModal({setOpenPost}) {
    const [editText, setEditText] = useState("")
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <CloseIcon onClick = {()=>setOpenPost(false)}/>
        </Header>
        <ShareContent>
          <UserInfo>
            <Avatar src="https://images.unsplash.com/photo-1659586556218-0c1314080cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80" />
            <span>Ahn Dinh Viet</span>
          </UserInfo>
          <Editor>
            <textarea placeholder="What do you want to talk about?" onChange={(e)=>setEditText(e.target.value)}></textarea>
          </Editor>
        </ShareContent>
        <ShareItems>
          <ShareItemsLeft>
            <label htmlFor="fileImg">
                <PhotoIcon />
                <input multiple style ={{display:"none"}} type='file' id='fileImg' accept='.png, .jpeg, .jpg' />
            </label>
            <YouTubeIcon />
            <ArticleIcon />
            <WorkIcon />
            <PollIcon />
            <BlurOnIcon />
            <MoreHorizIcon />
          </ShareItemsLeft>
          <CommentItem>
            <CommentIcon />
            Anyone
          </CommentItem>
          <Button disable = {!editText?true:false}>Post</Button>
        </ShareItems>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #000000a7;
`;

const Content = styled.div`
  position: relative;
  max-width: 550px;
  width: 100%;
  /* height: 50%; */
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
  padding: 10px;
`;

const ShareContent = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ShareItems = styled.div`
  color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ShareItemsLeft = styled.div`
  padding: 5px;
  display: flex;
  width: 300px;
  justify-content: space-between;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

const CommentItem = styled.div`
  /* flex: 2; */
  margin-right: auto;
  margin-left: 10px;
  display: flex;
  align-items: center;
  padding: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 5px;
  }
`;
const Button = styled.div`
  /* flex:0.5; */
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${props=>!props.disable?`#0a66c2`:`rgba(0, 0, 0, 0.08)`};
  color: #fff;
  cursor: ${props=>!props.disable?`pointer`:`not-allowed`};
`;

const Editor = styled.div`
    /* padding: 12px 24px; */
    textarea{
        width: 100%;
        height: 200px;
        resize: none;
        border: none;
        font-size: 20px;
        &:focus{
            outline: none;
        }
    }
`
