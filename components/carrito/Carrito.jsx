import React, { useContext } from 'react'
import styles from './Carrito.module.css'
import { CartContext } from '../../context/CartContextApp.jsx';

const Carrito = () => {

    const {productosCarrito,setProductosCarrito} = useContext(CartContext);

    const handleDelete = (position) => {

        const newProdCart = structuredClone(productosCarrito)
        newProdCart.splice(position,1)
        setProductosCarrito(newProdCart)
    }

    const showCart = productosCarrito.map((obj, position) => {
        return(
            <>
            <div className={styles.cartProducts}>
                {obj}
                <button  className={styles.cartButton} onClick={()=>{ handleDelete(position) }}>eliminar</button>
            </div>
            </>
        )
    }
    )

    
    
  return (

    <div className={styles.cartContainer}>
        <h3>Carrito</h3>
        {showCart}
    </div>

  )
}

export default Carrito