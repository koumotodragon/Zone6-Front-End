import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    display: flex;
    font-size:15px;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    height: 35px;
    width: 36px;
    margin: 0 0 0 3px;
    color: #b2b2b2;
    border-radius:8%;
  }
  .prev-btn:hover,.next-btn:hover{
    background: transparent;
    border-color: transparent;
   
  }
  .page-btn:hover, .prev-btn:hover,.next-btn:hover {
    text-decoration: none;
    color: #000;
    border-color: #e9e9e9 #ccc #ccc #dadada;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    background: #f9f9f9;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5ZjlmOSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlYmViZWIiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
    background: -moz-linear-gradient(top, #f9f9f9 0%, #ebebeb 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f9f9f9), color-stop(100%, #ebebeb));
    background: -webkit-linear-gradient(top, #f9f9f9 0%, #ebebeb 100%);
    background: -o-linear-gradient(top, #f9f9f9 0%, #ebebeb 100%);
    background: -ms-linear-gradient(top, #f9f9f9 0%, #ebebeb 100%);
    background: linear-gradient(to bottom, #f9f9f9 0%, #ebebeb 100%);
  }
  .active{
    font-weight: bold;
    color: #991a1a;
    pointer-events: none;

  }
  .prev-btn,.next-btn{
    padding:5px;
    background: transparent;
    border-color: transparent;
    color: #b2b2b2;
    border-radius:8%;
  }

.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
`;
export default Wrapper;
