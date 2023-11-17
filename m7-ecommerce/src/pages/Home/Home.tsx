import { useState, useEffect } from "react"
import { Hero } from "../../components/ui/Hero"
import styles from './Home.module.css'
import { CardProduct } from "../../components/ui/CardProduct/CardProduct"
import { getProducts } from "../../service"
import { Products } from "../../interface"

export const Home = () => {

  const [products, setProducts] = useState<Products[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Hero />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something wnet wrong</p>}
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
    </>
  )
}
