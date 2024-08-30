import styled from 'styled-components';

const Wrapper = styled.main`
background-color: #FFF;
.Content-Container {
    background-color: #FFF;
    width: 80vw;
    /* min-height:300vh; */
    font-size: calc(10px + 2vmin);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(212px, 1fr));
    gap: 16px;
    overflow: hidden;
}
.Featured-Header {
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
.Featured-Header span {
    color: #991A1A;
    background: none;
  }
  @media screen and (max-width:756px){
    .Content-Container {
      background-color: #FFF;
      width: 95vw;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;

export default Wrapper;
