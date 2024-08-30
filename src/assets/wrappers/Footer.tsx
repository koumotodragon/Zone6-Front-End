import styled from 'styled-components';

const Wrapper = styled.main`
.Footer-Container {
  width: 80vw;
  min-height: 20vh;
  font-size: calc(10px + 2vmin);
  color: white;
  display: flex;
  justify-content: center;
  align-items: self-start;
}

.footer-main {
  display: flex;
  width: 100%;
  padding: 15px 20px;
}
.footer-main .footer-logo {
  max-width: 153px;
}
.footer-main .footer-logo a img {
  width: 100%;
}
.footer-main .footer-menu {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
.footer-main .footer-menu ul {
  list-style: none;
  display: flex;
}
.footer-main .footer-menu ul li {
  margin: 0 10px 0 14px;
  display: flex;
  align-items: center;
}
.footer-main .footer-menu ul li a {
  font-family: "Roboto", Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.5em;
  text-decoration: none;
  text-transform: uppercase;
  color: #4c4c4c;
}
`;

export default Wrapper;
