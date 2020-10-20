import React, { useState } from 'react';
import { Container, ModalTrash, ModalDetails } from './styles';

import { TiArrowBack } from 'react-icons/ti';
import { FiTrash } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';

import data from '../../drinks.json';

const drinkList = data.drinks;

const NossaCartaPages: React.FC = () => {

  const [modalDetails, setModalDetails] = useState(false);
  const [modalTrash, setModalTrash] = useState(false);

  return (
    <Container>
      <button className='__voltar'>
        <TiArrowBack />
        VOLTAR
      </button>
      <h1>NOSSA CARTA</h1>

      <div className='showDrinks'>
        {drinkList &&
          drinkList.map((drink) => (
            <div key={drink.id}>
              <div className='__img'>
                <img title='Abrir' onClick={() => setModalDetails(true)} src={drink.url_img} />
              </div>
              <h4>{drink.drink_name}</h4>
              <button title='Deletar' onClick={() => setModalTrash(true)}><FiTrash className='__delete'/></button>
              <button title='Editar'><HiOutlinePencil className='__update'/></button>
            </div>
          ))}
      </div>
      {modalDetails &&
       <ModalDetails onClick={() => setModalDetails(false)}>
        <div className='__details' style={{backgroundImage: `url('https://cookinglsl.com/wp-content/uploads/2015/08/moscow-mule-edited-1-1.jpg')`}}>
          <button className='__close' title='Fechar' onClick={() => setModalDetails(false)}>&times;</button>
          <p className='__drinkName'>MOSCOW MULE</p>
          <div className='__ingredients'>
            <p>INGREDIENTES</p>
            <ul>
              <li>vodka</li>
              <li>hortelã</li>
              <li>açúcar</li>
              <li>gelo batido</li>
              <li>limão</li>
              <li>espuma de gengibre</li>
            </ul>
          </div>
        </div>
       </ModalDetails>
      }
      {modalTrash &&
       <ModalTrash onClick={() => setModalTrash(false)}>
        <div>
          <button className='__close' title='Fechar' onClick={() => setModalTrash(false)}>&times;</button>
          <p>Tem certeza que deseja apagar um elemento?</p>
          <ul>
            <li><button>Sim</button></li>
            <li><button>Não</button></li>
          </ul>
        </div>
       </ModalTrash>
      }

    </Container>
  );
};

export default NossaCartaPages;