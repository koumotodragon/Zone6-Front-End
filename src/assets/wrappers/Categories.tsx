import styled from 'styled-components';

const Wrapper = styled.main`
.Categories-Container {
  background-color: #FFF;
  width: 80vw;
  min-height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.Categories-Container::-webkit-scrollbar {
  display: none;
}
@media screen and (max-width:756px){
  .Categories-Container {
    width: 95vw;
  }
}
`;

export default Wrapper;
