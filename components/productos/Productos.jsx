import React, { useContext } from 'react'
import styles from './Productos.module.css'
import { CartContext } from '../../context/CartContextApp.jsx'

const Productos = () => {
    
    //  Productos que tenemos:
    const dataProduct = [
        {name: "Traadescantia",
        description: "cuidado nivel fácil",
        },
        {name: "Pachira",
        description: "cuidado nivel experto",
        },
        {name: "Ave del paraiso",
        description: "cuidado nivel medio",
        },
        {name: "Peperomia",
        description: "cuidado nivel fácil",
        },
        {name: "Calathea",
        description: "cuidado nivel experto",
        },
    ]

    const {productosCarrito, setProductosCarrito} = useContext(CartContext)

    //función que recorre y muestra cada elemento
    const showProduct = dataProduct.map((obj)=>{return(
        //Cada elemento tendrá: el nombre y descripcion del objeto y su propio botón.
        <>
        <div className={styles.rowProduct}>
            {obj.name}-{obj.description}
            <button onClick={()=>{setProductosCarrito([...productosCarrito, obj.name])}}>Añadir</button>
        </div> 
       </>
    )})

        console.log(productosCarrito)

  return (
    
    <div className={styles.productContainer}>
        Productos:
        <br></br>
        <br></br>
        {showProduct}
    </div>

  )
}

export default Productos