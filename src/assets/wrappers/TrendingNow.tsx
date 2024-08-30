import styled from 'styled-components';

const Wrapper = styled.main`
.Trending-Container {
  background-color: #fff;
  width: 80vw;
  min-height: 40vh;
  font-size: calc(10px + 2vmin);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-top: 1%;
}
.Trending-Container .Trending-Header {
  background: linear-gradient(to bottom, #fff 0%, #fff 36%, #f1f1f1 90%, #f1f1f1 100%);
  width: 100%;
  height: 6vh;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 25px;
  line-height: 25px;
  text-transform: uppercase;
  color: #121212;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1vh;
  box-shadow: 0 2px 1 0 rgba(0, 0, 0, 0.1);
}
.Trending-Container .Trending-Header span {
  color: #991A1A;
  background: none;
}
.Trending-Container .videos-carousel {
  width: 100%;
  position: relative;
}
.Trending-Container .videos-carousel .Trending-Videos {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
}
.Trending-Container .videos-carousel .video-prev {
  position: absolute;
  top: 0;
  left: -46px;
  text-indent: -9999px;
  overflow: hidden;
  background: url(https://worldstarhiphop.com/videos/images/arrows.png) no-repeat;
  width: 47px;
  height: 219px;
}
.Trending-Container .videos-carousel .video-prev:hover {
  background-position: 0 100%;
}
.Trending-Container .videos-carousel .video-next {
  position: absolute;
  top: 0;
  right: -46px;
  text-indent: -9999px;
  overflow: hidden;
  background: url(https://worldstarhiphop.com/videos/images/arrows.png) no-repeat;
  background-position: 100% 0;
  width: 47px;
  height: 219px;
}
.Trending-Container .videos-carousel .video-next:hover {
  background-position: 100% 100%;
}

.example::-webkit-scrollbar {
  display: none;
}
`;

export default Wrapper;
