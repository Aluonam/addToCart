import styles from '@/styles/Home.module.css'
import ScreenAddToCart from '@/screenAddToCart'


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <ScreenAddToCart></ScreenAddToCart>
      </main>
    </>
  )
}
