import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Container, ModalTrash, ModalDetails, ModalAdd } from './styles';
import ModalEdit from '../../components/Modal_Edit/modalEdit';

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
  const [week_drink, setWeekDrink] = useState(Boolean);
 
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

  async function addDrink() {
    // let strComma = ingredients
    // let b = strComma.split(',')
    // let c = ''
    // console.log(strComma, b, c)

    // for (var i=0; i<b.length; b++) {
    //   c.concat("\'").concat(b[i]).concat("\',\"")
    //   console.log(b)
    // }

    // let strComma = ingredients
    // // let replaceComma = strComma.split(',').map(function (str:String) {
    // //   return '"' +str+ '"';
    // // });
    // let c = replaceComma(" \g ",)

    await api.post(`drinks`, {
      drink_name,
      url_img,
      price,
      week_drink,
      ingredients
    })
      .then((response) => {
        console.log(response);
        // setModalAdd(false);
        // let adddDrinkData = drinkData.filter((drinks) => drinks);
        // setDrinkData(adddDrinkData);
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
            </div>
          ))}
          <button className='__newDrink' title='Adicionar uma bebida' onClick={openAddModal}>+</button>
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
       <ModalEdit item={drinkInfo?.id} setModal={setModalEdit} />
      }

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
            <section>
            <input type='checkbox' value='true' id='checkboxOneInput' onChange={(e:any) => {
                  setWeekDrink(e.target.value)
                  console.log(setWeekDrink)
                }}/>
                <label htmlFor='checkboxOneInput' />
            </section>
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