import React from 'react'
import Carrito from '@/components/Carrito'
import Productos from '@/components/Productos'
import { ContextAppProvider } from '@/context/CartContextApp'
import styles from '@/styles/Home.module.css'

const ScreenAddToCart = () => {
  return (
    <>
    <div>
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