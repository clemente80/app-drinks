import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;

  svg {
    margin-right: 15px;
    color: black;
    font-size: 25px;
    vertical-align: middle;
  }

  ul {
    position: relative;
    right: -25%;
    padding: 20px;
    /* background: rgba(256, 256, 256, 0.5); */
    background: linear-gradient(
      45deg,
      rgba(241, 196, 15, 0.75),
      rgba(253, 167, 223, 0.75)
    );
    list-style: none;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 8px;
    border: 1px solid rgba(256, 256, 256, 0.25);
    box-shadow: -20px 20px 50px rgba(256, 256, 256, 0.75);
  }

  li {
    border-bottom: 1px solid rgba(256, 256, 256, 0.5);
    padding: 50px 20px;
    transition: 0.4s ease-in-out;
    color: white;

    :hover {
      cursor: pointer;
    }
  }

  li:last-child {
    border: 0px;
  }
`;
