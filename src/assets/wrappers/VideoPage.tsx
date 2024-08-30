import styled from 'styled-components';

const Wrapper = styled.main`
background-color: black;
margin: auto;
padding-left: 60px;
padding-right: 60px;
max-width: 1920px;
width:100%;
.video-player-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background-color: black;
    color: white; 
  }
  .video-player-container .video-player {
    width: 70%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .video-player-container .video-player .video-tags {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .video-player-container .video-player .video-tags .video-tag {
    display: flex;
    border-radius: 2px;
    padding: 6px 6px 6px 12px;
    font-size: 15px;
    line-height: 18px;
    border-left: 3px solid #007bff;
    background-color: hsla(0, 0%, 100%, 0.2);
    border-top-color: hsla(0, 0%, 100%, 0.2);
    border-right-color: hsla(0, 0%, 100%, 0.2);
    border-bottom-color: hsla(0, 0%, 100%, 0.2);
  }
  .video-player-container .video-player .video-tags .video-tag a {
    text-decoration: none;
    color: #fff;
  }
  .video-player-container .video-player .video-title {
    padding-top: 0.5rem;
    // padding-left: 1rem;
    // padding-right: 1rem;
  }
  .video-player-container .video-player .video-title h1 {
    font-size: 20px;
    line-height: 30px;
    text-align:left;
  }
  .video-player-container .video-player .veiw-time {
    padding-top: 0.5rem;
    padding-left: 1rem;
    // padding-right: 1rem;
    padding-bottom: 1rem;
    display: flex;
    color:rgb(151,151,151);
    font-size:14px;
    gap: 1rem;
    border:solid 0;
    border-bottom-width: 1px;
    border-bottom-color: rgb(48 48 48 / 1);
}
  
  .video-player-container .video-player .veiw-time .view {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .video-player-container .video-player .veiw-time .view span {
    display: inline-block;
    width: 24px;
    margin-right: 0.5rem;
  }
  .video-player-container .video-player .veiw-time .view span img {
    width: 100%;
  }
  .video-player-container .video-player .veiw-time .time {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .video-player-container .video-player .veiw-time .time span {
    display: inline-block;
    width: 20px;
    margin-right: 0.5rem;
  }
  .video-player-container .video-player .veiw-time .time span img {
    width: 100%;
  }
  .video-player-container .ad-content {
    width: 30%;
    padding: 10px;
    color: white;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    .video-player-container {
      flex-direction: column-reverse;
    }
     .video-player-container .video-player {
      width: 100%;
      padding: 5px;
      display: flex;
      flex-direction: column;
      gap: 10px;
  }
  }
`;


export default Wrapper;
