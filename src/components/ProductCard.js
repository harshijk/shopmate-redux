import "./ProductCard.css";
import { add , remove} from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

export const ProductCard = ({product}) => {
  const {id,name, price, image} = product;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartState.cartList)
  const [IsItCart , setIsItCart] = useState( false );

  useEffect(() => {
    const productinCart = cart.find(element => element.id === id)
    if (productinCart){
      setIsItCart(true)
    }else {
      setIsItCart(false)
    }
    
 
  }, [cart,id])
  

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        { IsItCart ? <button class='remove' onClick={()=>dispatch(remove(product))}>Remove</button> : 
        <button onClick={()=>dispatch(add(product))}>Add To Cart</button>}
        
      </div>
    </div>
  )
}
