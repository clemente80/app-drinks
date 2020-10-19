import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  height: 100vh;

  .__voltar {
    position: absolute;
    top: 100px;
    left: 7%;
    border: 0px;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    :hover svg {
      transform: translateX(-5px) rotate(-45deg) scale(1.3);
    }
  }

  h1 {
    position: absolute;
    top: 100px;
    right: 7%;
  }

  svg {
    margin-right: 15px;
    color: black;
    font-size: 25px;
    vertical-align: middle;
    transition: 0.4s;
  }

  .showDrinks {
    text-align: left;
    position: relative;
    padding: 0;
    margin: 0 6%;
    top: 100px;
    width: 100vw;

    div {
      cursor: pointer;
      display: inline-block;
      position: relative;
      width: 273px;
      height: 318px;
      margin: 80px 70px;
      background-size: cover;
      list-style: none;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 8px;
      box-shadow: -20px 20px 35px rgba(25, 25, 25, 0.2);
      transition: 1s;

      :hover {
        box-shadow: -10px 10px 15px rgba(25, 25, 25, 0.5);
        transform: scale(0.95);
        transition: .4s ease-in-out;
      }

      .__img {
        position:relative;
        margin: 0;
        padding: 0;
        overflow: hidden;
        border: 4px red;
      }

      img {
        position: absolute;
        background: beige;
        border-radius: 8px;
        border: 0px;
        width: 100%;
        height: 100%;
        transition: .4s ease-in-out;

        :hover {
          transform: scale(1.2);
        }
      }

      h4 {
        position: absolute;
        top: 105%;
        left: 0;
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        text-transform: lowercase;
      }

      .__delete {
        position: absolute;
        right: -60px;
        top: 40%;
        transform: translateY(-40%);

        :hover {
          filter: invert(1);
        }
      }

      .__update {
        position: absolute;
        right: -60px;
        top: 60%;
        transform: translateY(-60%);

        :hover {
          filter: invert(1);
        }
      }
    }
    
    div:last-child:after {
      content: 'novo drink';
      font-size: 27px;
      text-align: center;
      text-transform: lowercase;
      line-height: 320px;
      position: absolute;
      width: 125px;
      height: 125px;
      border: 2px solid;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      right: -120%;

      :hover {
        filter: invert(1);
      }
    }

    div:last-child:before {
      content: '+';
      font-family: Roboto;
      font-weight: 100;
      font-size: 80px;
      text-align: center;
      text-transform: lowercase;
      line-height: 125px;
      position: absolute;
      width: 125px;
      height: 125px;
      border: 2px solid;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      right: -120%;
    }
  }
`
export const ModalTrash2 = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background: rgba(125,125,125,0.5);
transform: translateY(0px);
animation: moveToBottom .4s;

@keyframes moveToBottom {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

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
  }
}`