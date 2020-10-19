import React, { useState } from "react";
import { Container, ModalTrash2 } from "./styles";

import { TiArrowBack } from "react-icons/ti";
import { FiTrash } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";

import data from "../../drinks.json";

const drinkList = data.drinks;

const NossaCartaPages: React.FC = () => {

  const [modalDrink, setModalDrink] = useState(false);

  return (
    <Container>
      <button className="__voltar">
        <TiArrowBack />
        VOLTAR
      </button>
      <h1>NOSSA CARTA</h1>

      <div className="showDrinks">
        {drinkList &&
          drinkList.map((drink) => (
            <div key={drink.id}>
              <div className="__img">
                <img src={drink.url_img} />
              </div>
              <h4>{drink.drink_name}</h4>
              <button onClick={() => setModalDrink(true)}><FiTrash className="__delete"/></button>
              <button><HiOutlinePencil className="__update"/></button>
            </div>
          ))}
      </div>
      {modalDrink &&
       <ModalTrash2 className="teste">
        <div>
          <button className="__close" onClick={() => setModalDrink(false)}>&times;</button>
          <p>Tem certeza que deseja apagar um elemento?</p>
          <ul>
            <li><button>Sim</button></li>
            <li><button>Não</button></li>
          </ul>
        </div>
       </ModalTrash2>
      }

    </Container>
  );
};

export default NossaCartaPages;