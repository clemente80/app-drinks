import React, { useState } from "react";
import { Container } from "./styles";
import { TiArrowBack } from "react-icons/ti";
import { FiTrash } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import data from "../../drinks.json";

const drinkList = data.drinks;

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);


const NossaCartaPages: React.FC = () => {

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
              <button onClick={toggle}><FiTrash className="__delete"/></button>
              <button><HiOutlinePencil className="__update"/></button>
            </div>
          ))}
      </div>
      <Modal
        isOpen = {isShowing}
        isClose = {toggle}
      />
    </Container>
  );
};

export default NossaCartaPages;
