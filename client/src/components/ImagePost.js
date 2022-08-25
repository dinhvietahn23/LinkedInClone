import React, { useState } from "react";
import styled from "styled-components";
import Postt from "./Postt";

export default function ImagePost({ image, listImage }) {
  const [currentImg, setCurrentImg] = useState(image);

  const changeImg = (type) => {
    let currenIndexImg = listImage.indexOf(currentImg);
    if (type === "left") {
      currenIndexImg === 0
        ? setCurrentImg(listImage[listImage.length - 1])
        : setCurrentImg(listImage[currenIndexImg - 1]);

    }
    if (type === "right") {
      currenIndexImg === listImage.length - 1
        ? setCurrentImg(listImage[0])
        : setCurrentImg(listImage[currenIndexImg + 1]);
    }
  };
  return (
    <Container>
      <Contain>
        <Image>
          <img src={currentImg} width="100%" height="100%" />
          <ArrorBtnR onClick={()=>changeImg("right")}>
            <img src="/images/arrowr.png" alt=""  width="30px" height="30px"/>
          </ArrorBtnR>
          <ArrorBtnL onClick={()=>changeImg("left")}>
            <img src="/images/arrowl.png" alt=""   width="30px" height="30px" />
          </ArrorBtnL>
        </Image>
        <Content>
          <Postt />
        </Content>
      </Contain>
    </Container>
  );
}

const ArrorBtnL = styled.div`
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 5px;
`

const ArrorBtnR = styled.span`
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5px;
`
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000a7;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  /* overflow-x: hidden; */
`;
const Contain = styled.div`
  position: relative;
  top: 32px;
  width: 80%;
  height: 90%;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  border-radius: 10px;
`;

const Image = styled.div`
  position: relative;
  height: 95%;
  width: 52%;
  margin: auto auto;
  /* display: flex; */
  /* align-self: center; */
  /* flex: 2; */

`;

const Content = styled.div`
  width: 45%;
  height: 95%;
  margin: auto 0;
`;
