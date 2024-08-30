import styled from 'styled-components';

const Wrapper = styled.main`
.Featured-Container {
    width: 80vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .Featured-Container .Featured-Header {
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
  .Featured-Container .Featured-Header span {
    color: #991A1A;
    background: none;
  }
  .Featured-Container .Featured-Videos {
    width: "100%";
  }
  .Featured-Container .Featured-Videos img {
    height: 50vh;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover;
  }
  @media screen and (max-width:756px){
    .Featured-Container {
      width: 95vw;
    }
  }
`;

export default Wrapper;
