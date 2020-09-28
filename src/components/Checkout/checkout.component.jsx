import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
import './checkout.styles.scss'
import Pizzaman from "../../assets/PizzaMan.png";

export default function Checkout({ingredients, setIngredients}) {

    const [success, setSuccess] = useState(false);

    const resetIngredients = {
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
      }

    let history = useHistory()

    const handleDelete = (ingredient) => {
        let newIngridients = JSON.parse(JSON.stringify(ingredients));
        newIngridients[ingredient] = false;
        setIngredients(newIngridients);
    }

    return (
        <div className='checkout'>
           { !success&&(<div className='my-orders'>
                <h1>My Ingredients</h1><hr/>
                <div>
                    {Object.keys(ingredients)
                        .filter(indgredient=> ingredients[indgredient])
                        .map(ingredient => {
                            return (
                                <p key={ingredient}>{ingredient} {' '} <span className='delete' onClick={()=> handleDelete(ingredient)}>X</span></p>
                            )
                        })}
                </div>
                <button className='confirm' onClick={()=>setSuccess(true)}>Confirm</button>
                <button className='back' onClick={()=>history.push('/')}>Go back</button>
            </div>)}

            <div className='success-box'>
        {success && (
          <div style={{ textAlign: "center" }}>
            <img src={Pizzaman} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your order, Thank you
            </div>
            <div style={{ fontFamily: "Comfortaa" }}>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
              Will be ready in 20-30 min.
            </div>
            <button onClick={()=>{history.push('/'); setSuccess(false); setIngredients(resetIngredients)}}>Place another order</button>
          </div>
        )}
      </div>
        </div>
    )
}
