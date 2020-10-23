import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Container, ModalTrash, ModalDetails, ModalEdit, ModalAdd } from './styles';

import { TiArrowBack } from 'react-icons/ti';
import { FiTrash } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';

import api from '../../services/api';
import DrinkSemanaPages from '../DrinkSemana';
import { url } from 'inspector';

interface drinkData{
  id: number,
  drink_name: string,
  price: number,
  week_drink: boolean,
  ingredients:[],
  url_img: string
}

const NossaCartaPages: React.FC = () => {

  const [drinkData, setDrinkData] = useState<drinkData[]>([]);
  const [drinkInfo, setDrinkInfo] = useState<drinkData>();
  const [modalDetails, setModalDetails] = useState(false);
  const [modalTrash, setModalTrash] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  const [drink_name, setDrink_name] = useState();
  const [url_img, setUrImg] = useState();
  const [price, setPrice] = useState();
  const [ingredients, setIngredients] = useState();
 
  useEffect(()  => {
    api.get('/drinks')
    .then((response) => {
      console.log(response.data)
      setDrinkData(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  const openDrinkDetails = useCallback((drink) => {
    setModalDetails(true);
    setDrinkInfo(drink)
   },[setDrinkInfo])

  const openDeleteModal = useCallback((drink) => {
    setModalTrash(true);
    setDrinkInfo(drink)
  },[setDrinkInfo])

  const openUpdateModal = useCallback((drink) => {
    setModalEdit(true);
    setDrinkInfo(drink)
  },[setDrinkInfo])

  const openAddModal = useCallback((drink) => {
    setModalAdd(true);
    setDrinkInfo(drink)
  },[setDrinkInfo])
  
  async function deleteDrink(id:any) {
    await api.delete(`drinks/${id}`)
      .then((response) => {
        console.log(response);
        setModalTrash(false);
        let deletedDrinkData = drinkData.filter((drinks) => drinks.id != id);
        setDrinkData(deletedDrinkData);
      })
      .catch(err => console.log(err))
  }

  async function updateDrink(id:any) {
    await api.put(`drinks/${id}`, {
      drink_name,
      url_img,
      price,
      ingredients: [ingredients]
    })
      .then((response) => {
        console.log(response);
        setModalEdit(false);
        let updatedDrinkData = drinkData.filter((drinks) => drinks.id != id);
        setDrinkData(updatedDrinkData);
      })
      .catch(err => console.log(err))
  }

  // async function addDrink(e) {
  //   e.preventDefault()
  //   await api.post(`drinks`, { url_img, drink_name, price, ingredients })
  //     .then(() => setContent(true))
  //     .catch(err => console.log(err))
  // }
  
  return (
    <Container>
      <button className='__voltar'>
        <TiArrowBack />
        <Link to="/main" id="link-home">Voltar</Link>
      </button>
      
      <h1>NOSSA CARTA</h1>

      <div className='showDrinks'>
        {drinkData &&
          drinkData.map((drink) => (
            <div key={drink.id}>
              <div className='__img' onClick={() => openDrinkDetails(drink)}>
                <img alt='Abrir' src={drink?.url_img} />
              </div>
              <h4>{drink.drink_name}</h4>
              <button title='Deletar' onClick={() => openDeleteModal(drink)}><FiTrash className='__delete'/></button>
              <button title='Editar' onClick={() => openUpdateModal(drink)}><HiOutlinePencil className='__update'/></button>
            </div>
          ))}
      </div>

      {modalDetails &&
       <ModalDetails>
        <div className='__details' style={{ backgroundImage: `url(${drinkInfo?.url_img})`}}>
          <button className='__close' title='Fechar' onClick={() => setModalDetails(false)}>&times;</button>
          <p className='__drinkName'>{drinkInfo?.drink_name}</p>
              <div className='__ingredients'>
              <h1>INGREDIENTES</h1>
              <ul>
                {drinkInfo?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              </div>
        </div>
       </ModalDetails>
      }

      {modalTrash &&
       <ModalTrash>
        <div key={drinkInfo?.id}>
          <button className='__close' title='Fechar' onClick={() => setModalTrash(false)}>&times;</button>
          <p>Tem certeza que deseja apagar um item de <strong><i>{drinkInfo?.drink_name}</i></strong>?</p>
          <div className='__openImg' style={{ backgroundImage: `url(${drinkInfo?.url_img})`}}></div>
          <ul>
            <li><button className='__btnYN' onClick={() => deleteDrink(drinkInfo?.id)}>Sim</button></li>
            <li><button className='__btnYN' onClick={() => setModalTrash(false)}>Não</button></li>
          </ul>
        </div>
       </ModalTrash>
      }

      {modalEdit &&
       <ModalEdit>
        <div key={drinkInfo?.id}>
          <button className='__close' title='Fechar' onClick={() => setModalEdit(false)}>&times;</button>
          <p>Alteração de itens de bebida</p>
          <form>
            <input type='text' placeholder={drinkInfo?.drink_name} onChange={(e) => setDrink_name(e.target.value)}></input>
            <input type='url' placeholder={drinkInfo?.url_img} onChange={(e) => setUrImg(e.target.value)}></input>
            <input className='inputToPrice' placeholder={drinkInfo?.price.toString()} onChange={(e) => setPrice(e.target.value)}></input>
            <textarea className='inputToIngredients' placeholder={drinkInfo?.ingredients.toString()} onChange={(e) => setIngredients(e.target.value)}></textarea>
            <label>Drink da Semana?
              <div className='__toogle false'>
                <div className='__circle'></div>
              </div>
            </label>
            <ul>
              <li><button onClick={() => updateDrink(drinkInfo?.id)}>Alterar</button></li>
              <li><button onClick={() => setModalEdit(false)}>Cancelar</button></li>
            </ul>
          </form>
        </div>
       </ModalEdit>
      }

      {modalAdd &&
       <ModalAdd>
        <div key={drinkInfo?.id}>
          <button className='__close' title='Fechar' onClick={() => setModalAdd(false)}>&times;</button>
          <p>Alteração de itens de bebida</p>
          <form>
            <input type='text' placeholder='Digitar o nome da bebida' onChange={(e) => setDrink_name(e.target.value)}></input>
            <input type='url' placeholder='Copiar o url da imagem com formato de .jpg ou .png' onChange={(e) => setUrImg(e.target.value)}></input>
            <input className='inputToPrice' placeholder='Digitar o preço da bebida' onChange={(e) => setPrice(e.target.value)}></input>
            <textarea className='inputToIngredients' placeholder='Digitar os ingredientes desta bebida' onChange={(e) => setIngredients(e.target.value)}></textarea>
            <label>Drink da Semana?
              <div className='__toogle false'>
                <div className='__circle'></div>
              </div>
            </label>
            <ul>
              {/* <li><button onClick={() => addDrink(drinkInfo?.id)}>Alterar</button></li> */}
              <li><button>Alterar</button></li>
              <li><button onClick={() => setModalAdd(false)}>Cancelar</button></li>
            </ul>
          </form>
        </div>
       </ModalAdd>
      }

    </Container>
  );
};

export default NossaCartaPages;