import React, { useState } from 'react';
import { Container, ModalTrash, ModalDetails, ModalEdit } from './styles';

import { TiArrowBack } from 'react-icons/ti';
import { FiTrash } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';

import data from '../../drinks.json';

const drinkList = data.drinks;

const NossaCartaPages: React.FC = () => {

  const [modalDetails, setModalDetails] = useState(false);
  const [modalTrash, setModalTrash] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

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
              <button title='Editar' onClick={() => setModalEdit(true)}><HiOutlinePencil className='__update'/></button>
            </div>
          ))}
      </div>
      {modalDetails &&
       <ModalDetails>
        <div className='__details' style={{backgroundImage: `url('https://cookinglsl.com/wp-content/uploads/2015/08/moscow-mule-edited-1-1.jpg')`}}>
          <button className='__close' title='Fechar' onClick={() => setModalDetails(false)}>&times;</button>
          <p className='__drinkName'>MOSCOW MULE</p>
          <div className='__ingredients'>
            <h1>INGREDIENTES</h1>
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
       <ModalTrash>
        <div>
          <button className='__close' title='Fechar' onClick={() => setModalTrash(false)}>&times;</button>
          <p>Tem certeza que deseja apagar um item?</p>
          <ul>
            <li><button>Sim</button></li>
            <li><button>Não</button></li>
          </ul>
        </div>
       </ModalTrash>
      }
      {modalEdit &&
       <ModalEdit>
        <div>
          <button className='__close' title='Fechar' onClick={() => setModalEdit(false)}>&times;</button>
          <p>Alteração de item de bebida</p>
          <form>
            <input placeholder='Escolha uma imagem com URL'></input>
            <input placeholder='Nome da bebida'></input>
            <input placeholder='Preço da bebida'></input>
            <textarea placeholder="Ingredientes"></textarea>
            <label>Drink da Semana?
              <div className='__toogle active'>
                <div className='__circle'></div>
              </div>
            </label>
            <ul>
              <li><button>Alterar</button></li>
              <li><button onClick={() => setModalEdit(false)}>Cancelar</button></li>
            </ul>
          </form>
          
        </div>
       </ModalEdit>
      }

    </Container>
  );
};

export default NossaCartaPages;