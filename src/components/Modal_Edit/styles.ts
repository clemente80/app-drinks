import styled from "styled-components";

export const Container = styled.div`
position: fixed;
top: 0%;
left: 0%;
right: 0%;
bottom: 0%;
background: linear-gradient(45deg, rgba(0,0,0,.75), rgba(256,256,256,.75));
transform: translateY(0px);
animation: moveToBottom .5s;
z-index: 4;

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
  display: relative;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 340px;
  height: 520px;
  border: 1px solid #fff;
  box-shadow: 0px 10px 25px rgba(0,0,0,0.45);
  border-radius: 5px;
  /* overflow: hidden; */

  .__close {
    background: #555;
    color: white;
    position: absolute;
    right: 0%;
    width: 20px;
    height: 20px;
    text-align: center;
    font-weight: bolder;
    margin: 10px;
    padding: 2.5px;
    border: 0;
    border-radius: 5px;
    box-shadow: 0px 10px 15px rgba(0,0,0,0.25);
    transition: .4s;
    cursor: pointer;

    :hover {
      background: white;
      color: black;
      box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
    }
  }

  p {
    flex: 1;
    color: black;
    width: 100%;
    padding: 25px;
    padding-bottom: 10px;
    font-weight: bolder;
  }

  form {
    margin: 0   20px;
    border: 0;

    input {
      display: block;
      margin: 20px 0;
      width: 100%;
      border: 0px;
      border-radius: 2.5px;
      padding: 10px;
      box-shadow: -4px 4px 5px rgba(0,0,0,0.25);
      
      ::placeholder {
        color: #cacaca;
      }
    }

    .inputToPrice::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    .inputToIngredients {
      width: 100%;
      height: 150px;
      margin-bottom: 20px;
      border: 0px;
      border-radius: 2.5px;
      padding: 10px;      
      box-shadow: -4px 4px 5px rgba(0,0,0,0.25);

      ::placeholder {
        color: #cacaca;
      }
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
      padding: 0 25px;
    }

    .labelDrink {
      font-size: 14px;
      padding-left: 10px;
    }

    input[type=checkbox] {
        visibility: hidden;
    }

    .checkboxDrinkWeek {
      position: relative;
      width: 40px;
      height: 20px;
      top: -30px;
      background: #fff;
      margin: 20px 10px;
      border: 0;
      border-radius: 30px;
      transition: 1s ease-in-out;
      box-shadow: -4px 4px 5px rgba(0,0,0,0.25);

      input[type=checkbox]:checked + label {
        left: 22px;
      }

      label {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transition: all .5s ease;
        cursor: pointer;
        position: absolute;
        top: 2px;
        left: 2px;
        background: #555;
        transition: .2s ease-in-out;
      }
    }

    button {
      position: relative;
      top: -30px;
      padding: 10px 25px ;
      border: 0;
      border-radius: 5px;
      background: #555;
      color: white;
      box-shadow: 0px 10px 15px rgba(0,0,0,0.25);
      transition: .4s;
      cursor: pointer;

      :hover {
        background: white;
        color: black;
        box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
      }
    }
  }  
}`