import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/fullbg.jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/titlemovie.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Controls>
      <Subtitle>2018 o 8m o Family, Fantasy, Horror, Thriller</Subtitle>
      <Description>
        A man and his wife move to a new village for a better oppurtunity at
        life only to discover that this village may not be as it seems. It may
        be under a century old curse that has been plaguing the lives of those
        living there
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 15vh;
  width: 25vw;
  min-heightL 12px;
  max-width:250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    -webkit-filter: invert(1);
    margin: 5x;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1ox solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 25px;
    color: white;
    margin-top: -2px;
  }
`;
const GroupButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
