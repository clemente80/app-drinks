import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { TiArrowBack } from "react-icons/ti";
import { FiTrash } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import data from "../../drinks.json";
import Modal from "../../components/modal";
import useModal from '../../components/useModal';

const drinkList = data.drinks;
console.log(drinkList);

// interface DrinkData {
//   drinks: {
//     drink_id: string;
//     drink_name: string;
//     price: number;
//     week_drink: boolean;
//     ingredients: string;
//     url_img: string;
//   };
// }

// const [drinks, setDrinks] = useState<DrinkData[]>([]);

// useEffect(() => {
//   async function loadDrinks() {
//     const response = await api({
//       method: "get",
//       body: "",
//       headers: {  },
//     });
//     setDrinks(response.data);
//     return;
//   }

//   loadDrinks();
// });

const NossaCartaPages: React.FC = () => {
  const {isShowing, toggle} = useModal();
  return (
    <Container>
      <button>
        <TiArrowBack />
        VOLTAR
      </button>
      <h1>NOSSA CARTA</h1>

      <div className="showDrinks">
        {drinkList &&
          drinkList.map((drink) => (
            <div
              key={drink.id}
              // style={{
              // backgroundImage: `url(${drink.url_img})`
              // }}
            >
              <div className="__img">
                <img src={drink.url_img} />
              </div>
              <h4>{drink.drink_name}</h4>
              <FiTrash className="__delete" />
              <HiOutlinePencil className="__update"/>

            </div>
            
          ))}
      </div>
      <Modal/>
    </Container>
  );
};

export default NossaCartaPages;
