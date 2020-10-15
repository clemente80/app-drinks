import styled from "styled-components";

export const Container = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background: rgba(125,125,125,0.5);
transition: .4s;

div {
  background: linear-gradient(-45deg, #FDCB9E, #FDCBfE);
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 600px;
  height: 150px;
  box-shadow: 0px 10px 25px rgba(0,0,0,0.45);
  border-radius: 5px;
  overflow: hidden;

  .__close {
    background: #cacaca;
    position: absolute;
    right: 0%;
    width: 20px;
    height: 20px;
    text-align: center;
    margin: 10px;
    padding: 2.5px;
    box-shadow: 0px 10px 15px rgba(0,0,0,0.25);
    transition: .4s;
    cursor: pointer;

    :hover {
      background: white;
      box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
    }
  }

  p {
    flex: 1;
    color: black;
    width: 100%;
    padding: 25px;
    font-weight: bolder;
  }

  ul {
    flex: 1;
    list-style: none;
    display: flex;
    color: white;
    width: 100%;
  }

  li {
    display: inline-block;
    padding: 25px;
  }

  button {
    padding: 10px 25px ;
    border: 0;
    border-radius: 5px;
    background: #cacaca;
    box-shadow: 0px 10px 15px rgba(0,0,0,0.25);
    transition: .4s;
    cursor: pointer;

    :hover {
      background: white;
      box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
    }

    :active + && {
      display: none;
    }
  }
}
`
