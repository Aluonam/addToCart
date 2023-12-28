import React from 'react'
import Carrito from './components/carrito/Carrito.jsx'
import Productos from './components/productos/Productos.jsx'
import { ContextAppProvider } from '@/context/CartContextApp'
import styles from './styles/Home.module.css'

const ScreenAddToCart = () => {
  return (
    <>
    <div className={styles.titleCart}>
        App carrito de compra
    </div>

    <div>
        <ContextAppProvider>
            <Productos></Productos>
            <Carrito></Carrito>
        </ContextAppProvider>
    </div>
    </>
  )
}

export default ScreenAddToCart