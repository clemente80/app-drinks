import React from "react";
import ReactDOM from 'react-dom';
import {Container} from './styles';

const Modal = ({isOpen, isClose}) => isOpen ? ReactDOM.createPortal (
  <React.Fragment>
  <Container>
    <div>
      <button className="__close" onClick={isClose}>&times;</button>
      <p>Gostaria de apagar um elemento?</p>
      <ul>
        <li><button>Sim</button></li>
        <li><button>Não</button></li>
      </ul>
    </div>
    </Container>
  </React.Fragment>, document.body
): null;
export default Modal;