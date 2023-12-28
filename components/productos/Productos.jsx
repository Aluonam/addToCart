import React, { useContext } from 'react'
import styles from './Productos.module.css'
import { CartContext } from '../../context/CartContextApp.jsx'

const Productos = () => {

    //  Productos que tenemos:
    const dataProduct = [
        {
            name: "Tradescantia",
            description: "cuidado nivel fácil",
        },
        {
            name: "Pachira",
            description: "cuidado nivel experto",
        },
        {
            name: "Ave del paraiso",
            description: "cuidado nivel medio",
        },
        {
            name: "Peperomia",
            description: "cuidado nivel fácil",
        },
        {
            name: "Calathea",
            description: "cuidado nivel experto",
        },
    ]

    const { productosCarrito, setProductosCarrito } = useContext(CartContext)

    //función que recorre y muestra cada elemento
    const showProduct = dataProduct.map((obj) => {
        return (
            //Cada elemento tendrá: el nombre y descripción del objeto y su propio botón.
            <>
                <div className={styles.rowProduct}>
                    <div><h4>{obj.name}</h4> <span className={styles.extraInfo}>{obj.description}</span></div> 
                    <button className={styles.buttonRow} onClick={() => { setProductosCarrito([...productosCarrito, obj.name]) }}>Añadir</button>
                </div>
            </>
        ) 
    })

    console.log(productosCarrito)

    return (

        <div className={styles.productContainer}>

            <h3>Productos:</h3>

            <div className={styles.showProducts}>
                {showProduct}
            </div>

        </div>

    )
}

export default Productos