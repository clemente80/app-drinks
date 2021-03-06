import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Container, ModalTrash, ModalDetails, ModalEdit, ModalAdd } from './styles';

import { TiArrowBack } from 'react-icons/ti';
import { FiTrash } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';
import tagSpot from '../../assets/tag2.png'

import api from '../../services/api';
// import DrinkSemanaPages from '../DrinkSemana';
// import { url } from 'inspector';

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
  const [modalEditConfirmed, setModalEditConfirmed] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  const [drink_name, setDrink_name] = useState();
  const [url_img, setUrImg] = useState();
  const [price, setPrice] = useState();
  const [ingredients, setIngredients] = useState();
  const [week_drink, setWeekDrink] = useState(false);
 
  useEffect(()  => {
    api.get('/drinks')
    .then((response) => {
      setDrinkData(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  const openDrinkDetails = useCallback((drink) => {
    setModalDetails(true)
    setDrinkInfo(drink)
   },[setDrinkInfo])

  const openDeleteModal = useCallback((drink) => {
    setModalTrash(true)
    setDrinkInfo(drink)
  },[setDrinkInfo])

  const openUpdateModal = useCallback((drink) => {
    setModalEdit(true)
    setDrinkInfo(drink)
    // setWeekDrink(drink.week_drink)
  },[setDrinkInfo])

  function openAddModal() {
    setModalAdd(true);
  }
  
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

  async function updateDrink(drink:any) {
    await api.put(`drinks/${drink.id}`, {
      drink_name: drink_name === undefined ? drink.drink_name : drink_name,
      url_img: url_img === undefined ? drink.url_img : url_img,
      price: price === undefined ? drink.price : price,
      week_drink: week_drink === undefined ? drink.week_drink : week_drink,
      ingredients: ingredients === undefined ? drink.ingredients : ingredients,
    })
      .then((response) => {
        setModalEdit(false);
        // setModalEditConfirmed(true);
        let updatedDrinkData = drinkData.filter((drinks) => drinks.id != drink.id);
        setDrinkData(updatedDrinkData);
      })
      .catch(err => console.log(err))
  }

  async function addDrink() {
    await api.post(`drinks`, {
      drink_name,
      url_img,
      price,
      week_drink,
      ingredients
    })
      .then((response) => {
        console.log(response);
      })
      .catch(err => console.log(err))
  }
  
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
              <div className='__tag'style={{backgroundImage: `url(${tagSpot})`, opacity: drink.week_drink ? 1 : 0}}> </div>
            </div>
          ))}
          <button className='__newDrink' title='Adicionar uma bebida' onClick={openAddModal} style={{top: `${drinkInfo?.id} === '7'`?'0px':'100px', marginBottom: '150px'}}>+</button>
      </div>

      {modalDetails &&
       <ModalDetails>
        <div className='__details' style={{ backgroundImage: `url(${drinkInfo?.url_img})`}}>
          <button className='__close' title='Fechar' onClick={() => setModalDetails(false)}>&times;</button>
          <div className='__tag' style={{backgroundImage: `url(${tagSpot})`, opacity: drinkInfo?.week_drink ? 1 : 0}}> </div>
          <p className='__drinkName'>{drinkInfo?.drink_name}</p>
          <div className='__ingredients'>
            <h1>INGREDIENTES</h1>
            <ul>
              {drinkInfo?.ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <p className='__price'>R$ {drinkInfo?.price},&#8304;&#8304; </p>
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
            <input type='text' placeholder={drinkInfo?.drink_name} onChange={(e:any) => setDrink_name(e.target.value)}></input>
            <input type='url' placeholder={drinkInfo?.url_img} onChange={(e:any) => setUrImg(e.target.value)}></input>
            <input className='inputToPrice' placeholder={drinkInfo?.price.toString()} onChange={(e:any) => setPrice(e.target.value)}></input>
            <textarea className='inputToIngredients' placeholder={drinkInfo?.ingredients.toString()} onChange={(e:any) => {
                let ingredientsArray = e.target.value.split(',')
                let splitTrim = ingredientsArray.map((s:any) => s.trim())
                setIngredients(splitTrim)
              }}>
            </textarea>
            <label className='labelDrink'>Drink da Semana?</label>
            <section>
              <div className='checkboxForEdit'>
                <input type='checkbox' id='checkboxOneInput' onChange={(e:any) => {
                  // console.log('Atual:' + e.target.value)
                  if(e.target.value === "on"){
                    e.target.value = "off"
                    setWeekDrink(true)
                  }else if(e.target.value === "off"){
                    e.target.value = "on"
                    setWeekDrink(false)
                  }
                  // console.log(e.target.value, drinkInfo?.drink_name, week_drink)
                }}/>
                {/* <label htmlFor='checkboxOneInput' style={{left: `${drinkInfo?.week_drink}`? '22px':'0px'}} /> */}
                <label htmlFor='checkboxOneInput'/>
              </div>
            </section>
            <ul>
              <li><button onClick={() => updateDrink(drinkInfo)}>Alterar</button></li>
              <li><button onClick={() => setModalEdit(false)}>Cancelar</button></li>
            </ul>
          </form>
        </div>
       </ModalEdit>
      }

      {/* {modalEditConfirmed &&
       <ModalEditConfirmed>
        <div key={drinkInfo?.id}>
          <button className='__close' title='Fechar' onClick={() => setModalEdit(false)}>&times;</button>
          <img></img>
          <p>Drink da <strong>{drinkInfo?.drink_name}</strong> foi sido deletado com sucesso!</p>
          <button>Ok</button>
        </div>
       </ModalEditConfirmed>
      } */}

      {modalAdd &&
       <ModalAdd>
        <div key={drinkInfo?.id}>
          <button className='__close' title='Fechar' onClick={() => setModalAdd(false)}>&times;</button>
          <p>Adicionar bebida</p>
          <form>
            <input type='text' placeholder='Digitar o nome da bebida' onChange={(e:any) => setDrink_name(e.target.value)}></input>
            <input type='url' placeholder='Copiar o url da imagem e colar aqui' onChange={(e:any) => setUrImg(e.target.value)}></input>
            <input className='inputToPrice' placeholder='Digitar o preço da bebida' onChange={(e:any) => setPrice(e.target.value)}></input>
            <textarea className='inputToIngredients' placeholder='Digitar os ingredientes' onChange={(e:any) => {
                let ingredientsArray = e.target.value.split(',');
                let splitTrim = ingredientsArray.map((s:any) => s.trim());
                setIngredients(splitTrim)
              }}>
            </textarea>
            <label className='labelDrink'>Drink da Semana?</label>
            <div className='checkboxForAdd'>
                <input type='checkbox' id='checkboxOneInput' onChange={(e:any) => {
                  // console.log('Atual:' + e.target.value)
                  if(e.target.value === "on"){
                    e.target.value = "off"
                    setWeekDrink(true)
                  }else if(e.target.value === "off"){
                    e.target.value = "on"
                    setWeekDrink(false)
                  }
                }}/>
                <label htmlFor='checkboxOneInput' />
            </div>
            <ul>
              <li><button onClick={addDrink}>Acidionar</button></li>
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