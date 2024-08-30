import styled from 'styled-components';

const Wrapper = styled.main`
 display:flex;
  background-color: #191919;
  width: 100%;
  min-height: 20vh;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: center;
  align-items: end;
  .App-header{
    width:100%;
    background-color: #121212;
  }
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #121212;
  margin:auto;
}
.navbar .header-left {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.navbar .header-left .nav-logo {
  max-width: 145px;
  margin-right: 1rem;
}
.navbar .header-left .nav-logo a {
  width: 100%;
  display: flex;
}
.navbar .header-left .nav-logo a img {
  width: 100%;
}
.navbar .header-left .nav-menu ul {
  display: flex;
  list-style: none;
}
.navbar .header-left .nav-menu ul li {
  padding: 10px;
  display: flex;
  align-items: center;
}
.navbar .header-left .nav-menu ul li a {
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #FFFFFF;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Roboto Condensed";
}
.navbar .header-left .nav-serach {
  display: flex;
  align-items: center;
}
.navbar .header-left .nav-serach input {
  padding: 4px 32px 4px;
  width: 240px;
  height: 35px;
  color: white;
  background: #393939;
  border-radius: 20px;
  border: 0;
  box-shadow: none;
}
.navbar .header-left .nav-serach input::-moz-placeholder {
  color: white;
}
.navbar .header-left .nav-serach input::placeholder {
  color: white;
}
.navbar .header-right {
  display: flex;
}
.navbar .header-right .nav-user a img {
  width: 22px;
  height: 22px;
}
.navbar .header-right .nav-social {
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar .header-right .nav-social ul {
  display: flex;
  list-style: none;
}
.navbar .header-right .nav-social ul li {
  padding: 0 5px;
}
.navbar .header-right .nav-social ul li img {
  width: 22px;
  height: 22px;
}
@media screen and (max-width:756px){
  .navbar .header-right{
    display:none;
  }
  .navbar .header-left{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "a b"
        "c c";
  }
  .navbar .nav-logo{
    grid-area:a;
  }
  .navbar .nav-menu{
    grid-area:b;
  }
  .navbar .nav-serach{
    grid-area:c;
  }
  .navbar .header-left .nav-serach form,.navbar .header-left .nav-serach form input{
    width:100%;
  }
}
`;

export default Wrapper;
