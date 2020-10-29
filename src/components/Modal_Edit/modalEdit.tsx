import React, { useState, useEffect, useCallback } from 'react';
import {Container} from './styles';
import api from '../../services/api';

interface drinkData{
    id: number,
    drink_name: string,
    price: number,
    week_drink: boolean,
    ingredients:[],
    url_img: string
  }
  
const ModalEdit = (item:any, setModal:any) => {
    
    const [drinkData, setDrinkData] = useState<drinkData[]>([]);

    const [drink_name, setDrink_name] = useState();
    const [url_img, setUrImg] = useState();
    const [price, setPrice] = useState();
    const [ingredients, setIngredients] = useState();
    const [week_drink, setWeekDrink] = useState(Boolean);

    async function updateDrink(id:any) {
        await api.put(`drinks/${id}`, {
            drink_name,
            url_img,
            price,
            week_drink,
            ingredients
        })
        .then((response) => {
        console.log(response);
        setModal(false);
        let updatedDrinkData = drinkData.filter((drinks) => drinks.id != id);
        setDrinkData(updatedDrinkData);
        })
        .catch(err => console.log(err))
    }

  return (
    <Container>
    <div key={item?.id}>
      <button className='__close' title='Fechar' onClick={() => setModal()}>&times;</button>
      <p>Alteração de itens de bebida</p>
      <form>
        <input type='text' placeholder={item?.drink_name} onChange={(e:any) => setDrink_name(e.target.value)}></input>
        <input type='url' placeholder={item?.url_img} onChange={(e:any) => setUrImg(e.target.value)}></input>
        <input className='inputToPrice' placeholder={item?.price} onChange={(e:any) => setPrice(e.target.value)}></input>
        <textarea className='inputToIngredients' placeholder={item?.ingredients} onChange={(e:any) => {
            let ingredientsArray = e.target.value.split(',')
            let splitTrim = ingredientsArray.map((s:any) => s.trim())
            setIngredients(splitTrim)
          }}>
        </textarea>
        <label className='labelDrink'>Drink da Semana?</label>
        <section>
          <div className='checkboxDrinkWeek'>
            <input type='checkbox' value='true' id='checkboxOneInput' onChange={(e:any) => {
              let splitWeekDrink = e.target.value.replace(/"/g,"")
              setWeekDrink(splitWeekDrink)
            }}/>
            <label htmlFor='checkboxOneInput' />
          </div>
        </section>
        <ul>
          <li><button onClick={() => updateDrink(item?.id)}>Alterar</button></li>
          <li><button onClick={() => setModal(false)}>Cancelar</button></li>
        </ul>
      </form>
    </div>
    </Container>
);
}
export default ModalEdit;

